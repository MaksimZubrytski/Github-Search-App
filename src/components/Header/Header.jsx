import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Logo />
      <Search />
    </div>
  </header>
);

export default Header;
