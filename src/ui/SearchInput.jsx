import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function submitHandler(e) {
    e.PreventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Search OrderID #..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
