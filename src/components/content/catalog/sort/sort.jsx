import React from "react";
import styles from './sort.module.css'
import equa from '../../../../images/equa.svg'
const Sort = ()=>{
    return (
        <div className={styles.sort}>
        <div className={styles.count}><span>Найдено товаров: </span><span>1273</span></div>
            <div className={styles.filters}><span>Фильтры</span><img src={equa} alt={equa}/></div>
            <div className={styles.costSort}><span>↑ Цена по возрастанию</span></div>

        </div>
    )
};

export default Sort;