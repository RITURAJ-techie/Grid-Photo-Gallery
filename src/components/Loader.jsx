
function Loader() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-5">

      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#EBD2CC] border-t-[#C58F85]" />

      <p className="text-sm font-medium tracking-wide text-[#987A75]">
        Loading photographs...
      </p>

    </div>
  );
}

export default Loader;
