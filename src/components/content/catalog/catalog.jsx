import React, {useState} from "react";
import styles from './catalog.module.css'
import ProductHeader from "./product-header/product-header";
import FiltersContainer from "./filters/filtersContainer";
import ActiveFilters from "./active-filters/active-filters";
import PagesContainer from "./pages/pages-container";
import ProductsContainer from "./products/productsContainer";




const Catalog = (props)=>{

    const [filterState, setFilterState] = useState(true);

    return (
        <div className={styles.catalog}>
            <div className={styles.sort}>
                <ProductHeader setFilterState={setFilterState} {...props}/>

            </div>

            <div className={styles.filters}>
                <FiltersContainer filterState={filterState} setFilterState={setFilterState} />
            </div>
            <div className={styles.products}>
                <ActiveFilters/>
                <ProductsContainer location={props.location} history={props.history}/>
                <PagesContainer/>
            </div>
        </div>
    )
};

export default Catalog;