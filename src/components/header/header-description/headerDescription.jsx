import React from 'react'
import styles from './headerDescription.module.css'
import {NavLink} from "react-router-dom";
const HeaderDescription = ()=>{
    return (
        <div className={styles.content}>
            <h1><NavLink to={'/'}>spirit</NavLink></h1>
            <p>Магазин мужской парфюмерии</p>
        </div>
    )
}
export default HeaderDescription