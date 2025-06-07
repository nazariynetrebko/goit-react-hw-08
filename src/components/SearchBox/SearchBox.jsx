import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { selectNameFilter } from "../../redux/filters/selectors";
import styles from "./searchBox.module.css";

function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

export default SearchBox;
