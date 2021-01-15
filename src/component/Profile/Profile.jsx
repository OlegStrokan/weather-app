import React from 'react'
import Preloader from "../common/Preloader/Preloader";
import userPhoto from "../../assets/images/img.jpg";
import styles from "./Profile.module.css";
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return <div className={styles.wrapper}>
            <div>
            <img src={props.profile.photos.big != null ? props.profile.photos.big : userPhoto}
                 className={styles.userPhoto}/>
            </div>
            <div>
                <h1>ProfileInfo:</h1>
                <h3>Name: {props.profile.fullName}</h3>
                <div>Status: {props.profile.lookingForAJob ? 'I am a boss' : 'I am a programmer'}</div>
                <div>UserId: {props.profile.userId}</div>
                <div>My Github: {props.profile.contacts.github ? props.profile.contacts.github : <a href="https://github.com/OlegStrokan">https://github.com/OlegStrokan</a>}</div>
            </div>
        <NavLink to={'/users'} className={styles.back}>Back</NavLink>
    </div>
}


export default Profile