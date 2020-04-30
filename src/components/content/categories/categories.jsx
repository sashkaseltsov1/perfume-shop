import React from "react";
import styles from './categories.module.css'
import nicheImg from '../../../images/niche-pefume.jpg'
import menImg from '../../../images/men-perfume.jpg'
import womenImg from '../../../images/women-perfume.jpg'
import allImg from '../../../images/all.jpg'
import CategoryButton from "./categoryButton";
import TextWithLine from "../../templates/text-width-line/text-with-line";
import arrow from '../../../images/arrow.png'

const Categories = ()=>{
    return(
        <div>
            <div className={styles.title}>
                <TextWithLine name={'Категории'} />
            </div>
            <div className={styles.gridContainer} >
                <CategoryButton image={allImg} name={'Все'} bgColor={'#161616'} />
                <CategoryButton image={menImg} name={'Для мужчин'} bgColor={'#6495ed'} />
                <CategoryButton image={womenImg} name={'Для женщин'} bgColor={'#e7a9bc'} />
                <CategoryButton image={nicheImg} name={'Ниша'} bgColor={'#9593d9'} />
            </div>
            <ItemSlider/>

        </div>

    )
}

const ItemSlider = ()=>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.arrowLeft}><img src={arrow} /></div>
            <div className={styles.arrowRight}><img src={arrow}/></div>
            <div className={styles.itemSlider}>
                <div className={styles.items}>
                    <div>item2</div>
                    <div>item2</div>
                    <div>item3</div>
                    <div>item4</div>
                    <div>item2</div>
                    <div>item3</div>
                    <div>item4</div>
                </div>
            </div>
        </div>

    )
}

export default Categories