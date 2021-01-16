import React from 'react'
import {connect} from "react-redux";
import {addPostAC, updateNewPostTextAC } from "../../../redux/profile-reducer";
import ProfilePosts from "./ProfilePosts";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)

export default ProfilePostsContainer