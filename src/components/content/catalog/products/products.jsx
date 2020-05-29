import React from "react";
import styles from './products.module.css'
import Item from "../../../templates/item/item";
import Loader from "../../../templates/loader/loader";
const Products = (props)=>{

    return (
        <div>
            {props.products.products.length>0 && <div className={styles.products}>
                {props.products.products && props.products.products.map(item => (<div key={item._id}><Item item={item}/></div>))}
                {props.products.isLoading && <Loader/>}
            </div>}
            {props.products.products.length===0 &&<div className={styles.nothingFounded}>
                {props.products.error && <span className={styles.error}>Произошла ошибка!</span>}
                {!props.products.error && <span>Ничего не найдено</span>}
            </div>}
        </div>
    )
};

export default Products;
