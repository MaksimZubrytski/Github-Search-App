import React from 'react';
import styles from './UserNotFound.module.css';

const UserNotFound = () => (
  <div className={styles.wrapper}>
    <span className={styles.ico} />
    <span className={styles.text}>User not found</span>
  </div>
);

export default UserNotFound;
