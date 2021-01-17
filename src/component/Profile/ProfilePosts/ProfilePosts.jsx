import React from "react";
import styles from './ProfilePosts.module.css';
import Post from './Post/Post'

const ProfilePosts = (props) => {
    const postsElements = props.posts
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef()

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    const onAddPost = () => {
        props.addPost()
    }
    return  <div className={styles.postsBlock}>
            <div className={styles.bgColor}>
               <div className={styles.header}>Comments</div>
                <div><textarea className={styles.textarea}
                               onChange={onPostChange}
                               value={props.newPostText}
                               ref={newPostElement}>

           </textarea></div>
                <button className={styles.button} onClick={onAddPost}>Add comment</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>

}

export default ProfilePosts