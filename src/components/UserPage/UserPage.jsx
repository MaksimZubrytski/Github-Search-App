import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import UserNotFound from '../UserNotFound/UserNotFound';
import Repositories from './Repositories/Repositories';
import './UserPage.scss';

const UserPage = (props) => {
  const { isFetching, user } = { ...props };
  const {
    id,
    name,
    login,
    followers,
    imageUrl,
    following,
    url,
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
    <div className='user-page__wrapper'>
      <div className='user'>
        <img src={imageUrl} className='user__image' alt='user' />
        <h1 className='user__title'>{name}</h1>
        <a className='user__link' href={url} target='_blank' rel='noreferrer'>{login}</a>
        <div className='follow'>
          <div className='follow__container'>
            <span className='ico ico_followers' />
            <span className='follow__text'>{followers} followers</span>
          </div>
          <div className='follow__container'>
            <span className='ico ico_following' />
            <span className='follow__text'>{following} following</span>
          </div>
        </div>
      </div>
      <Repositories />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userPage.user,
  isFetching: state.userPage.isFetching,
});

export default connect(mapStateToProps, null)(UserPage);
