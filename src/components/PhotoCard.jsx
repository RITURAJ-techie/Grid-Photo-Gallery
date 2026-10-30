
function PhotoCard({
  photo,
  isFavourite,
  onToggleFavourite
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#F0E3DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C58F85]/10">

      <div className="relative h-72 overflow-hidden sm:h-80">

        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? "Remove from favourites"
              : "Add to favourites"
          }
          aria-pressed={isFavourite}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-all duration-200 hover:scale-110 ${
            isFavourite
              ? "bg-[#C58F85] text-white"
              : "bg-white/95 text-[#987A75] hover:bg-[#C58F85] hover:text-white"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
        </button>

      </div>

      <div className="bg-white px-4 py-4">
        <h3 className="line-clamp-2 text-base font-semibold text-[#493936]">
          {photo.author}
        </h3>
      </div>

    </article>
  );
}

export default PhotoCard;
