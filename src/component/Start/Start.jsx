import React from 'react'
import {NavLink} from "react-router-dom";
import styles from './Start.module.css'


const Start = (props) => {
    return <div className={styles.main}>
        <h1>Test Project 1.0</h1>
        {props.isAuth
            ? props.login
            : <NavLink to={'/login'} className={styles.loginBlock}>Login</NavLink>
        }

        <NavLink to='/users' className={styles.nav}>Get Users</NavLink>
    </div>
}

export default Start