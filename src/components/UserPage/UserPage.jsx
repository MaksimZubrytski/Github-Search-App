import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import UserNotFound from '../UserNotFound/UserNotFound';
import styles from './UserPage.module.css';

const UserPage = (props) => {
  if (props.isFetching) {
    return (
        <Preloader />
    )
  }
  if (!props.user.id) {
    return (
      <UserNotFound />
    )
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <img src={props.user.avatar_url} className={styles.image} alt='user' />
        <h1 className={styles.title}>{props.user.name}</h1>
        <span className={styles.login}>{props.user.login}</span>
        <div className={styles.follow}>
          <div className={styles.follow_container}>
            <span className={styles.ico_followers}></span>
            <span className={styles.text}>{props.user.followers} followers</span>
          </div>
          <div className={styles.follow_container}>
            <span className={styles.ico_following}></span>
            <span className={styles.text}>{props.user.following} following</span>
          </div>
        </div>
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    user: state.userPage.user,
    isFetching: state.userPage.isFetching,
  }
}

export default connect(mapStateToProps, null)(UserPage);