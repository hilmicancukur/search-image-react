import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright © <a href="https://www.hilmican.com" target="_blank" rel="noopener noreferrer">hilmican.com</a></p>
    </footer>
  );
}

export default Footer;
