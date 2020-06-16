import React from "react";
import styles from "./item.module.css";
import newItem from "../../../images/offer-items/new.svg";
import discount from "../../../images/offer-items/discount.svg";
import {NavLink} from "react-router-dom";


const Item = (props)=>{
    return(
        <div key={props.item._id} className={styles.item}>
            <div className={styles.offers}>
                {props.item.isNovelty && <img src={newItem} alt={newItem}/>}
                {props.item.isDiscount && <img src={discount} alt={discount}/>}
            </div>
            <div className={styles.itemImg} >
                <NavLink to={'/shop/catalog/'+props.item._id}>
                    <img src={props.item.image} alt={props.item.img}/>
                </NavLink>
            </div>
            <div className={styles.itemTitle}>
                <NavLink to={'/shop/catalog/'+props.item._id}>{props.item.name}</NavLink>
            </div>
            <div className={styles.itemDescription}>
                {props.item.perfumeType?.type}
                {props.item.isInitial && <span style={{'color':'white'}}>init</span>}
            </div>
            <div className={styles.itemCost}>
                {!props.item.isInitial && parseInt(props.item.fullPrise).toLocaleString('ru-RU')}
                {props.item.isInitial && <span style={{'color':'white'}}>руб</span>}
                {!props.item.isInitial && <span > руб</span>}
            </div>
        </div>
    )
};

export default Item;