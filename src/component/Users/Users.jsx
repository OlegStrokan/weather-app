import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/img.jpg";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import axios from "axios";
let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

   return <div>
      <div className={styles.wrapper}>{pages.map(p => {
           return <span  className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}><span className={styles.item}>{p}</span></span>
       })}
          <NavLink to='/' className={styles.nav}>Back</NavLink>
      </div>
       {props.isFetching ? <Preloader /> : null }
       <div className={styles.container}>
       {props.users.map(u => <div className={styles.main} key={u.id}>
           <span>
                    <div>
                         <NavLink to={'/profile/' + u.id}>
                        <img src={u.userImg != null ? u.userImg : userPhoto}
                             className={styles.userPhoto}/>
                         </NavLink>
                    </div>
                     <span>
                        <div className={styles.userName}>Name: {u.name}</div>
                         <div>
                             {u.followed ?
                                 <button onClick={() =>{
                                     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                         withCredentials: true,
                                         headers: {
                                             "API-KEY": "6c6c5c88-772b-456e-8563-ea65435b40fb"
                                         }
                                     })
                                         .then(response => {
                                             if(response.data.redultCode === 0){
                                                 props.unfollow(u.id)
                                             }
                                         })
                                 }} className={styles.isFollow}>Unfollow</button> :
                                 <button onClick={() =>{
                                     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                         withCredentials: true,
                                         headers: {
                                             "API-KEY": "6c6c5c88-772b-456e-8563-ea65435b40fb"
                                         }
                                     })
                                         .then(response => {
                                             if(response.data.redultCode === 0){
                                                 props.follow(u.id)
                                             }
                                         })
                                 }} className={styles.isFollow}>Follow</button>}
                         </div>
                    </span>
                </span>
       </div>)}
       </div>
   </div>
}

export default Users;