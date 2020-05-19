import React from "react";
import styles from './product-header.module.css'
import equa from '../../../../images/equa.svg'
import SortByPrise from "./sort";
import TotalCount from "./total-count";



const ProductHeader = (props)=>{
    return (
        <div className={styles.sort}>
            <TotalCount/>
            <div className={styles.filters}>
                <span onClick={()=>props.setFilterState(false)}>
                    Фильтры
                </span>
                <img src={equa} alt={equa}/>
            </div>
            <SortByPrise/>
        </div>
    )
};

export default ProductHeader;