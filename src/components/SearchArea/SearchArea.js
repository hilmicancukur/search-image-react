import styles from "./SearchArea.module.scss";
import { useState } from "react";

function SearchArea({search}) {
  const [value, setValue] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    search('can');
  }
  const changeValue = (e)=>{
    setValue(e.target.value);
  }
  return (
    <form action="GET" onSubmit={handleSubmit} className={styles.search__wrapper}>
      <label className="" htmlFor="lfor-search">Search images</label>
      <input type="text" id="lfor-search" className="form-control" value={value} onChange={changeValue}/>
    </form>
  );
}

export default SearchArea;
