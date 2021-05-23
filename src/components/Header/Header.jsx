import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../api/userApi/provider';
import { setIsFetchingAC, setIsSearchAC, setUserAC } from '../../redux/user-reducer';
import styles from './Header.module.css';

const Header = (props) => {
  const { setIsSearch, setIsFetching, setUser } = { ...props };

  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSearch(true);
    setIsFetching(true);
    getUser(searchValue).then((data) => {
      setIsFetching(false);
      setUser(data);
    });
    setSearchValue("");
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <span className={styles.ico} />
        </div>
        <div className={styles.search}>
          <form onSubmit={handleSubmit}>
            <span className={styles.ico_search} />
            <input onChange={(e) => setSearchValue(e.target.value)} type='text' value={searchValue} />
          </form>
        </div>
      </div>
    </header>
  );
};

export default connect(null,
  { setUser: setUserAC, setIsSearch: setIsSearchAC, setIsFetching: setIsFetchingAC })(Header);
