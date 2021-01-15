import React from 'react';
import preloader from "../../../assets/images/preloader.svg";
import styles from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={styles.loader}>
        <img src={preloader} />
    </div>
}

export default Preloader;