import React from 'react';
import styles from './Initial.module.css';

const Initial = () => (
  <div className={styles.wrapper}>
    <span className={styles.ico} />
    <span className={styles.text}>Start with searching
      a GitHub user
    </span>
  </div>
);

export default Initial;
