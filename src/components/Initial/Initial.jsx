import styles from './Initial.module.css';

const Initial = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.ico}></span>
      <span className={styles.text}>Start with searching
        a GitHub user</span>
    </div>
  );
}

export default Initial;