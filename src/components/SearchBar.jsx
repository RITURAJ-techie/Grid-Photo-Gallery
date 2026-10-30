
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-8">
      <div className="group flex items-center gap-3 rounded-xl border border-[#EBD2CC] bg-white px-5 py-4 transition-all duration-300 hover:border-[#D9B4AC] focus-within:border-[#C58F85] focus-within:ring-4 focus-within:ring-[#C58F85]/10">

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 shrink-0 text-[#B59A94] transition-colors group-focus-within:text-[#C58F85]"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 4 4" />
        </svg>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search photos by author..."
          aria-label="Search photos by author name"
          className="w-full bg-transparent text-sm text-[#493936] outline-none placeholder:text-[#B59A94]"
        />

      </div>
    </div>
  );
}

export default SearchBar;
