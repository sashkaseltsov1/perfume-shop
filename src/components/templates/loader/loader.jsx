import React from "react";
import styles from './loader.module.css'
import loader from '../../../images/loader.svg'
const Loader = (props)=>{
    return (
        <div className={styles.loader}>
            <div/>
            <img src={loader} alt={loader}/>
        </div>
    )
}

export default Loader