import React from 'react';
import { connect } from 'react-redux';
import './Follow.scss';

const Follow = (props) => {
  const { user } = { ...props };

  return (
    <div className='follow'>
      <div className='follow__container'>
        <span className='ico ico_followers' />
        <span className='follow__text'>{user.getFollowers()} followers</span>
      </div>
      <div className='follow__container'>
        <span className='ico ico_following' />
        <span className='follow__text'>{user.getFollowing()} following</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.userPage.user });

export default connect(mapStateToProps, null)(Follow);
