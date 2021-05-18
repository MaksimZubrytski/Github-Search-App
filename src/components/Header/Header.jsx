import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <span className={styles.ico}></span>
        </div>
        <div className={styles.search}>
          <form>
            <span className={styles.ico_search}></span>
            <input type="text"></input>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;