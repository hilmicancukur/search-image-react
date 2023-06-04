import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__title}> Search Image from Unsplash </div>
    </header>
  );
}

export default Header;
