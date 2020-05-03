import React from "react";
import styles from "./item.module.css";
import newItem from "../../../../images/offer-items/new.svg";
import discount from "../../../../images/offer-items/discount.svg";

const Item = (props)=>{
    return(
        <div key={props.item.id} >
            <div>
                <div className={styles.offers}>
                    {props.item.isNew && <img src={newItem} alt={newItem} />}
                    {props.item.isDiscount && <img src={discount} alt={discount} />}
                </div>
                <div className={styles.itemImg} >
                    <img src={props.item.img} alt={props.item.img}/>
                </div>
                <div className={styles.itemTitle} >
                    <span>{props.item.title}</span>
                </div>
                <div className={styles.itemDescription}>
                    {props.item.description}
                </div>
                <div className={styles.itemCost}>
                    {props.item.cost}
                </div>
            </div>
        </div>
    )
};

export default Item;