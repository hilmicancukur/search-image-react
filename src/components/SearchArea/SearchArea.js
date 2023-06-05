import styles from "./SearchArea.module.scss";


function SearchArea({search}) {
  const handleSubmit = (e)=>{
    e.preventDefault();
    search('can');
  }
  return (
    <form action="GET" onSubmit={handleSubmit} className={styles.search__wrapper}>
      <label className="" htmlFor="lfor-search">Search images</label>
      <input type="text" id="lfor-search" className="form-control"/>
    </form>
  );
}

export default SearchArea;
