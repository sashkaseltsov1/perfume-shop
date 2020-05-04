import React from "react";
import styles from './catalog.module.css'
import Filters from "./filters/filters";
import Sort from "./sort/sort";
import Products from "./products/products";
import arr from "../../templates/array/arr";



const Catalog = ()=>{
    return (
        <div className={styles.catalog}>
            <div className={styles.sort}><Sort/></div>
            <div className={styles.filters}><Filters/></div>
            <div className={styles.products}>
                <Products items={arr}/>
            </div>
        </div>
    )
};

export default Catalog;