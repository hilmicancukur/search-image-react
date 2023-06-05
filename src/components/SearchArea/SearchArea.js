import styles from "./SearchArea.module.scss";
import { useState } from "react";

function SearchArea({search}) {
  const [value, setValue] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    search(value);
  }
  const changeValue = (e)=>{
    setValue(e.target.value);
  }
  return (
    <form action="GET" onSubmit={handleSubmit} className={styles.search__wrapper}>
      <label className={styles.form__label} htmlFor="lfor-search">Search images:</label>
      <input type="text" name="search" id="lfor-search" className={styles.form__control} value={value} onChange={changeValue}/>
    </form>
  );
}

export default SearchArea;
