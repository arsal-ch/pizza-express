import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        className="focus:w- w-32 rounded-full bg-yellow-200 px-4 py-1 transition-all duration-300 placeholder:text-sm focus:outline-none  focus:ring focus:ring-yellow-500 focus:ring-opacity-70 focus:ring-offset-2 sm:w-64 sm:focus:w-72"
        placeholder="Search Order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
