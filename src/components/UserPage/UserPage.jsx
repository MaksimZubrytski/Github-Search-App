import { connect } from 'react-redux';
import { setUser } from '../../redux/user-reducer';
import styles from './UserPage.module.css';
import * as axios from 'axios';
import { useEffect } from 'react';


const UserPage = (props) => {
    useEffect(() => {
        axios.get('https://api.github.com/users/gaearon').then((resp) => {
            props.setUser(resp.data)
        })
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.user}>
                <img src={props.user.avatar_url} className={styles.image} alt='user' />
                <h1 className={styles.name}>{props.user.name}</h1>
                <span className={styles.login}>{props.user.login}</span>
                <span className={styles.login}>{props.user.followers} followers</span>
                <span className={styles.login}>{props.user.following} following</span>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        user: state.userPage.user,
    }
}



export default connect(mapStateToProps, { setUser })(UserPage);