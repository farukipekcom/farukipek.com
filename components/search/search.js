import styles from './search.module.scss'
import SearchIcon from '../icons/search'
const Search = () => {
    return (
        <div class={styles.search}>
          <p class={styles.text}>
            I`ve written 4 articles on my blog. Use the search below to filter
            by title.
          </p>
          <div class={styles.input}>
            <input type="text" placeholder="Search articles" />
            <SearchIcon size={15} />
          </div>
        </div>
    );
}

export default Search;