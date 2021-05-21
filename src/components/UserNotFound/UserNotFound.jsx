import styles from './UserNotFound.module.css';

const UserNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.ico}></span>
      <span className={styles.text}>User not found</span>
    </div>
  );
}

export default UserNotFound;