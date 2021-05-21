import { useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../api/userApi/provider';
import { setIsFetching, setIsSearch, setUser } from '../../redux/user-reducer';
import styles from './Header.module.css';

const Header = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setIsSearch(true);
    props.setIsFetching(true);
    getUser(searchValue).then((data) => {
      props.setIsFetching(false);
      props.setUser(data);
    })
    setSearchValue("")
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <span className={styles.ico}></span>
        </div>
        <div className={styles.search}>
          <form onSubmit={handleSubmit}>
            <span className={styles.ico_search}></span>
            <input onChange={(e) => setSearchValue(e.target.value)} type="text" value={searchValue}></input>
          </form>
        </div>
      </div>
    </header>
  );
}

export default connect(null , { setUser, setIsSearch, setIsFetching })(Header);