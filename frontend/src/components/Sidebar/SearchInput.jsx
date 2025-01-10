const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="search..."
        className="input input-bordered rounded-full"
      ></input>
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        🔍
      </button>
    </form>
  );
};

export default SearchInput;
