import React from "react";
import styles from './categories.module.css'
import nicheImg from '../../../../images/niche-pefume.jpg'
import menImg from '../../../../images/men-perfume.jpg'
import womenImg from '../../../../images/women-perfume.jpg'
import allImg from '../../../../images/all.jpg'
import CategoryButton from "./categoryButton";
import TextWithLine from "../../../templates/text-width-line/text-with-line";
import alive from '../../../../images/items/alive.jpg'
import amber from '../../../../images/items/amber.jpg'
import lacoste from '../../../../images/items/lacoste.jpg'
import varvatos from '../../../../images/items/varvatos.jpg'

import ItemSliderContainer from "../../../templates/item-slider/itemSliderContainer";
import Item from "../../../templates/item-slider/item/item";
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




        </div>

    )
};



export default Categories