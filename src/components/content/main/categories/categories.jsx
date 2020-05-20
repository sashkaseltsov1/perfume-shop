import React from "react";
import styles from './categories.module.css'
import nicheImg from '../../../../images/niche-pefume.jpg'
import menImg from '../../../../images/men-perfume.jpg'
import womenImg from '../../../../images/women-perfume.jpg'
import allImg from '../../../../images/all.jpg'
import CategoryButton from "./categoryButton";
import TextWithLine from "../../../templates/text-width-line/text-with-line";

const Categories = ()=>{
    return(
        <div>
            <div className={styles.title}>
                <TextWithLine name={'Категории'} />
            </div>
            <div className={styles.gridContainer} >
                <CategoryButton image={allImg} name={'Все'} bgColor={'#161616'} />
                <CategoryButton url={'?gender=5ebac469345ad830c8c668cf'}
                                image={menImg} name={'Для мужчин'} bgColor={'#6495ed'} />
                <CategoryButton url={'?gender=5ebac469345ad830c8c668d0'}
                                image={womenImg} name={'Для женщин'} bgColor={'#e7a9bc'} />
                <CategoryButton url={'?gender=5ebac469345ad830c8c668d1'}
                                image={nicheImg} name={'Ниша'} bgColor={'#9593d9'} />
            </div>





        </div>

    )
};



export default Categories