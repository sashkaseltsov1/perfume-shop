import React, { useState} from "react";
import styles from './catalog.module.css'
import Filters from "./filters/filters";
import Sort from "./sort/sort";
import Products from "./products/products";
import arr from "../../templates/array/arr";



const Catalog = ()=>{
    const [filterState, setFilterState] = useState(true);

    return (
        <div className={styles.catalog}>
            <div className={styles.sort}><Sort setFilterState={setFilterState}/></div>
            <div className={styles.filters}><Filters filterState={filterState} setFilterState={setFilterState} /></div>
            <div className={styles.products}>
                <Products items={arr}/>
            </div>
        </div>
    )
};

export default Catalog;