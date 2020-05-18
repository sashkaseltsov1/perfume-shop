import React, {useState} from "react";
import styles from './catalog.module.css'
import Sort from "./sort/sort";
import Products from "./products/products";
import FiltersContainer from "./filters/filtersContainer";
import ActiveFilters from "./active-filters/active-filters";
import PagesContainer from "./pages/pages-container";




const Catalog = (props)=>{

    const [filterState, setFilterState] = useState(true);

    return (
        <div className={styles.catalog}>
            <div className={styles.sort}>
                <Sort setFilterState={setFilterState} {...props}/>

            </div>

            <div className={styles.filters}>
                <FiltersContainer filterState={filterState} setFilterState={setFilterState}/>
            </div>
            <div className={styles.products}>
                <ActiveFilters/>
                <Products location={props.location}/>
                <PagesContainer/>
            </div>
        </div>
    )
};

export default Catalog;