import { FcSearch } from "react-icons/fc";
import classes from "./SearchBar.module.css";

const SearchBar = ({ callback }) => {
  const getSearchValue = (e) => callback(e.target.value);

  return (
    <div className={classes.container}>
      <FcSearch />
      <input
        type="text"
        placeholder="Search..."
        autoFocus={true}
        onChange={getSearchValue}
      />
    </div>
  );
};

export default SearchBar;
