import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getRepositories } from '../../api/repositoriesApi/provider';
import { getUser } from '../../api/userApi/provider';
import { setRepositoriesAC } from '../../redux/repositories-reducer';
import { setIsFetchingAC, setIsSearchAC, setUserAC } from '../../redux/user-reducer';
import styles from './Header.module.css';

const Header = (props) => {
  const { setIsSearch, setIsFetching, setUser, setRepositories, currentPage, pageSize } = { ...props };

  const [searchValue, setSearchValue] = useState('');

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setIsSearch(true);
      setIsFetching(true);
      const userData = await getUser(searchValue);

      setUser(userData);

      const repositoriesData = await getRepositories(searchValue, currentPage, pageSize);

      setIsFetching(false);
      setRepositories(repositoriesData);
      setSearchValue("");
    } catch (e) {
      setRepositories([]);
      setIsFetching(false);
    }
  }

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

const mapStateToProps = (state) => ({
  pageSize: state.repositoriesData.pageSize,
  currentPage: state.repositoriesData.currentPage,
});

export default connect(mapStateToProps,
  {
    setUser: setUserAC,
    setIsSearch: setIsSearchAC,
    setIsFetching: setIsFetchingAC,
    setRepositories: setRepositoriesAC,
  })(Header);
