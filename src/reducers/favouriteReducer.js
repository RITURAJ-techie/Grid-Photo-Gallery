
export function favouriteReducer(state, action) {
  switch (action.type) {

    case "ADD_FAVOURITE":
      if (state.includes(action.payload)) {
        return state;
      }

      return [...state, action.payload];

    case "REMOVE_FAVOURITE":
      return state.filter(
        (id) => id !== action.payload
      );

    default:
      return state;
  }
}


export function getInitialFavourites() {
  try {
    const savedFavourites = localStorage.getItem("favourites");
    if (!savedFavourites) {
      return [];
    }

    const parsedFavourites = JSON.parse(savedFavourites);

    return Array.isArray(parsedFavourites)
      ? parsedFavourites
      : [];

  } catch (error) {
    console.error("Unable to read favourites:", error);
    return [];
  }
}
