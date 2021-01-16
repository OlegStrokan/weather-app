import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import styles from './Profile.module.css'

const Profile = (props) => {
    return <div className={styles.wrapper}>
        <ProfileInfo profile={props.profile}/>
        <ProfilePostsContainer/>
        </div>
}


export default Profile