import React, {useState} from "react";
import styles from './catalog.module.css'
import ProductHeader from "./product-header/product-header";
import FiltersContainer from "./filters/filters-container";
import ActiveFilters from "./active-filters/active-filters";
import PagesContainer from "./pages/pages-container";
import ProductsContainer from "./products/products-container";
import {RouteComponentProps} from "react-router-dom";

const Catalog = (props:RouteComponentProps)=>{
    const [filterState, setFilterState] = useState(true);

    return (
        <div className={styles.catalog}>
            <div className={styles.sort}>
                <ProductHeader setFilterState={setFilterState} {...props}/>

            </div>

            <div className={styles.filters}>
                <FiltersContainer filterState={filterState} setFilterState={setFilterState} location={props.location} history={props.history} />
            </div>
            <div className={styles.products}>
                <ActiveFilters/>
                <ProductsContainer location={props.location} history={props.history} match={props.match}/>
                <PagesContainer/>
            </div>
        </div>
    )
};

export default Catalog;