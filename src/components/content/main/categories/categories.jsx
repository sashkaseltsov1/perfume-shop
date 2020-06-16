import React from "react";
import styles from './categories.module.css'
import nicheImg from '../../../../images/niche-pefume.jpg'
import menImg from '../../../../images/men-perfume.jpg'
import womenImg from '../../../../images/women-perfume.jpg'
import allImg from '../../../../images/all.jpg'
import CategoryButton from "./categoryButton";
import TextWithLine from "../../../templates/text-with-line/text-with-line";
import {NavLink} from "react-router-dom";

const Categories = ({filters})=>{
    return(
        <div>
            <div className={styles.gridContainer} >
                <CategoryButton image={allImg} name={'Все'} bgColor={'#161616'} />
                <CategoryButton url={filters[3]?.items[0]?`?gender=${filters[3].items[0]._id}`:undefined}
                                image={menImg} name={'Для мужчин'} bgColor={'#6495ed'} />
                <CategoryButton url={filters[3]?.items[1]?`?gender=${filters[3].items[1]._id}`:undefined}
                                image={womenImg} name={'Для женщин'} bgColor={'#e7a9bc'} />
                <CategoryButton url={filters[3]?.items[2]?`?gender=${filters[3].items[2]._id}`:undefined}
                                image={nicheImg} name={'Ниша'} bgColor={'#9593d9'} />
            </div>
            <div className={styles.brands} >
                {filters[1]?.items.map(brand=>{
                    return <NavLink to={`/shop/catalog?brand=${brand._id}`} key={brand._id} className={styles.bottle} >
                    <div className={styles.cup}/>
                    <div className={styles.spout}/>
                    <div className={styles.body}><span>{brand.type}</span></div>
                </NavLink>})}
            </div>
            <TextWithLine name={'Ароматы'} />
            <div className={styles.fragrances} >
                {filters[2]?.items.map(fragrance=><NavLink to={`/shop/catalog?fragrance=${fragrance._id}`}
                                                           key={fragrance._id}
                                                           className={styles.fragrance}>
                    {fragrance.type}
                </NavLink>)}
            </div>



        </div>

    )
};



export default Categories