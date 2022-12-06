import styles from "./search.module.scss";
import SearchIcon from "../icons/search";
const Search = ({ length, onChange, value }) => {
  return (
    <div className={styles.search}>
      <p className={styles.text}>
        I've written {length} articles on my blog. Use the search below to
        filter by title.
      </p>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="Search articles"
          value={value}
          onChange={onChange}
        />
        <SearchIcon size={15} />
      </div>
    </div>
  );
};

export default Search;
