import React from 'react';
import styles from './Repository.module.css';

const Repository = (props) => {
  const {
    name,
    description,
  } = { ...props };

  return (
    <div className={styles.repository}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.text}>{description}</p>
    </div>
  );
};

export default Repository;
