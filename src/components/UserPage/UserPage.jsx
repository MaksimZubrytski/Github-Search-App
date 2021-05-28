import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import UserNotFound from '../UserNotFound/UserNotFound';
import Repositories from './Repositories/Repositories';
import UserProfile from './UserProfile/UserProfile';
import './UserPage.scss';

const UserPage = (props) => {
  const { isFetching, userId } = { ...props };

  if (isFetching) {
    return (
      <Preloader />
    );
  }

  if (!userId) {
    return (
      <UserNotFound />
    );
  }

  return (
    <div className='user-page__wrapper'>
      <UserProfile />
      <Repositories />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.userPage.user.id,
  isFetching: state.userPage.isFetching,
});

export default connect(mapStateToProps, null)(UserPage);
