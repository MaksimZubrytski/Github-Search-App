import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getRepositories } from '../../../api/repositoriesApi/provider';
import { getUser } from '../../../api/userApi/provider';
import { setCurrentPageAC, setRepositoriesAC } from '../../../redux/repositories-reducer';
import { setIsFetchingAC, setIsSearchAC, setUserAC } from '../../../redux/user-reducer';
import styles from './Search.module.css';

const Search = (props) => {
  const { setIsSearch, setIsFetching, setUser, setRepositories, defaultPage, pageSize, setCurrentPage } = { ...props };

  const [searchValue, setSearchValue] = useState('');

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setIsSearch(true);
      setIsFetching(true);
      const userData = await getUser(searchValue);

      setUser(userData);

      const repositoriesData = await getRepositories(searchValue, defaultPage, pageSize);

      setCurrentPage(defaultPage);
      setIsFetching(false);
      setRepositories(repositoriesData);
      setSearchValue("");
    } catch (e) {
      setRepositories([]);
      setIsFetching(false);
    }
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <span className={styles.ico_search} />
        <input onChange={(e) => setSearchValue(e.target.value)} type='text' value={searchValue} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pageSize: state.repositoriesData.pageSize,
  defaultPage: state.repositoriesData.defaultPage,
});

export default connect(mapStateToProps,
  {
    setUser: setUserAC,
    setIsSearch: setIsSearchAC,
    setIsFetching: setIsFetchingAC,
    setRepositories: setRepositoriesAC,
    setCurrentPage: setCurrentPageAC,
  })(Search);
