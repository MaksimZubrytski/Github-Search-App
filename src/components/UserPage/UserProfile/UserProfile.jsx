import React from 'react';
import { connect } from 'react-redux';
import './UserProfile.scss';

const UserProfile = (props) => {
  const { user } = { ...props };
  const {
    name,
    login,
    followers,
    imageUrl,
    following,
    url,
  } = { ...user };

  return (
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
  );
};

const mapStateToProps = (state) => ({ user: state.userPage.user });

export default connect(mapStateToProps, null)(UserProfile);
