import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <header className="flex h-12 justify-between items-center bg-yellow-500 px-6 py-4 uppercase m-0">
      <Link to="/" className=" tracking-widest">
        Pizza Express .co
      </Link>
      <SearchInput />
    </header>
  );
}

export default Header;
