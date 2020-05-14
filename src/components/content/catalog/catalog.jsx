import React, {Suspense, useEffect, useRef, useState} from "react";
import styles from './catalog.module.css'
import Filters from "./filters/filters";
import Sort from "./sort/sort";
import Products from "./products/products";




const Catalog = (props)=>{

    const [filterState, setFilterState] = useState(true);

    return (
        <div className={styles.catalog}>
            <div className={styles.sort}><Sort setFilterState={setFilterState} {...props}/></div>

                <div className={styles.filters}>
                    <Filters filterState={filterState} setFilterState={setFilterState}/>
                </div>
                <div className={styles.products}>
                    <Products location={props.location}/>
                </div>
        </div>
    )
};

export default Catalog;