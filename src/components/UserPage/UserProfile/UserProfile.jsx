import React from 'react';
import { connect } from 'react-redux';
import Follow from './Follow/Follow';
import './UserProfile.scss';

const UserProfile = (props) => {
  const { user } = { ...props };

  const {
    name,
    login,
    imageUrl,
    url,
  } = { ...user };

  return (
    <div className='user'>
      <img src={imageUrl} className='user__image' alt='user' />
      <h2 className='user__title'>{name}</h2>
      <a className='user__link' href={url} target='_blank' rel='noreferrer'>{login}</a>
      <Follow />
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.userPage.user });

export default connect(mapStateToProps, null)(UserProfile);
