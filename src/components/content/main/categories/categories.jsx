import React from "react";
import styles from './categories.module.css'
import nicheImg from '../../../../images/niche-pefume.jpg'
import menImg from '../../../../images/men-perfume.jpg'
import womenImg from '../../../../images/women-perfume.jpg'
import allImg from '../../../../images/all.jpg'
import CategoryButton from "./categoryButton";
import TextWithLine from "../../../templates/text-with-line/text-with-line";

const Categories = ({filters})=>{
    console.log(filters)
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
            <TextWithLine name={'Брэнды'} />
            <div className={styles.types} >
                {filters[1]?.items.map(brand=><div key={brand._id} className={styles.type}>
                    <div/>
                    <div/>
                    <div className={styles.div}>{brand.type}</div>

                </div>)}
            </div>
            <TextWithLine name={'Ароматы'} />
            <div className={styles.types} >
                {filters[2]?.items.map(fragrance=><div key={fragrance._id} className={styles.div}>{fragrance.type}</div>)}
            </div>



        </div>

    )
};



export default Categories