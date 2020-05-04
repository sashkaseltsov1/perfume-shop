import React from "react";
import styles from './products.module.css'
import Item from "../../../templates/item/item";

const Products = (props)=>{
    return (
        <div className={styles.products}>
            {props.items.map(item => (<div><Item item={item}/></div>))}
        </div>
    )
};

export default Products;