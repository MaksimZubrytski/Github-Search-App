import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUserThunkCreator } from '../../../redux/search-thunk';
import styles from './Search.module.css';

const Search = (props) => {
  const { defaultPage, pageSize, getUser } = { ...props };

  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    getUser(searchValue, defaultPage, pageSize);
    setSearchValue("");
  };

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
  { getUser: getUserThunkCreator })(Search);
