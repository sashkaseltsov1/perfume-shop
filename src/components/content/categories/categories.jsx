import React from "react";
import styles from './categories.module.css'
import nicheImg from '../../../images/niche-pefume.jpg'
import menImg from '../../../images/men-perfume.jpg'
import womenImg from '../../../images/women-perfume.jpg'
import allImg from '../../../images/all.jpg'
const Categories = ()=>{
    return(
        <div className={styles.gridContainer}>
            <div><img src={allImg} /></div>
            <div><img src={menImg}/></div>
            <div><img src={womenImg} /></div>
            <div><img src={nicheImg} /></div>
        </div>
    )
}

export default Categories