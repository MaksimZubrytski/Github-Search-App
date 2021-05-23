import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import UserNotFound from '../UserNotFound/UserNotFound';
import styles from './UserPage.module.css';

const UserPage = (props) => {
  const { isFetching, user } = { ...props };
  const {
    id,
    name,
    login,
    followers,
    imageUrl,
    following,
  } = { ...user };

  if (isFetching) {
    return (
      <Preloader />
    );
  }

  if (!id) {
    return (
      <UserNotFound />
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <img src={imageUrl} className={styles.image} alt='user' />
        <h1 className={styles.title}>{name}</h1>
        <span className={styles.login}>{login}</span>
        <div className={styles.follow}>
          <div className={styles.follow_container}>
            <span className={styles.ico_followers} />
            <span className={styles.text}>{followers} followers</span>
          </div>
          <div className={styles.follow_container}>
            <span className={styles.ico_following} />
            <span className={styles.text}>{following} following</span>
          </div>
        </div>
      </div>
      <div className='repositories'>
        <h2 className='title'>Repositories (222)</h2>
        <div className='repository'>
          <h3 className='title'>react-hot-loader</h3>
          <p>Tweak React components in real time. (Deprecated: use Fast Refresh instead.</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userPage.user,
  isFetching: state.userPage.isFetching,
});

export default connect(mapStateToProps, null)(UserPage);
