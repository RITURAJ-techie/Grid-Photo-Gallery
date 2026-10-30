
import {useState,useCallback,useMemo,useReducer,useEffect} from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";

import {favouriteReducer,getInitialFavourites} from "../reducers/favouriteReducer";

import PhotoCard from "./PhotoCard";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState("");

  const [favourites, dispatch] = useReducer(
    favouriteReducer,
    undefined,
    getInitialFavourites
  );

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);


  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim())
      );
  }, [photos, searchTerm]);

  useEffect(() => {
    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

  const handleFavouriteToggle = (photoId) => {
    if (favourites.includes(photoId)) {
      dispatch({
        type: "REMOVE_FAVOURITE",
        payload: photoId
      });
    } else {
      dispatch({
        type: "ADD_FAVOURITE",
        payload: photoId
      });
    }
  };


  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-white px-6 py-16 text-center">
        <h2 className="text-xl font-semibold text-[#493936]">
          Something went wrong
        </h2>

        <p className="mt-3 text-sm text-[#987A75]">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div>

      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B17D76]">
          Discover Photography
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-[#493936] sm:text-4xl">
          Photo Gallery
        </h1>

        <p className="mt-2 text-sm text-[#987A75]">
          Explore beautiful moments captured around the world.
        </p>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
      />

      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleFavouriteToggle}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#EBD2CC] bg-white py-16 text-center">
          <h3 className="text-lg font-semibold text-[#493936]">
            No photos found
          </h3>

          <p className="mt-2 text-sm text-[#987A75]">
            No results for "{searchTerm}". Try another author name.
          </p>
        </div>
      )}
    </div>
  );
}

export default Gallery;
