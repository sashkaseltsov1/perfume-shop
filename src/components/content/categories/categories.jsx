import React from "react";
import styles from './categories.module.css'
import nicheImg from '../../../images/niche-pefume.jpg'
import menImg from '../../../images/men-perfume.jpg'
import womenImg from '../../../images/women-perfume.jpg'
import allImg from '../../../images/all.jpg'
import CategoryButton from "./categoryButton";
const Categories = ()=>{
    return(
        <div>
            <h2>Категории</h2>
            <div className={styles.line}><hr /></div>
            <div className={styles.gridContainer} >
                <CategoryButton image={allImg} name={'Все'} bgColor={'#161616'} />
                <CategoryButton image={menImg} name={'Для мужчин'} bgColor={'#6495ed'} />
                <CategoryButton image={womenImg} name={'Для женщин'} bgColor={'#e7a9bc'} />
                <CategoryButton image={nicheImg} name={'Ниша'} bgColor={'#9593d9'} />
            </div>
        </div>

    )
}

export default Categories