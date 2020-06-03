import React from "react";
import styles from './order.module.css'
import {NavLink} from "react-router-dom";

const Order = ({order})=>{
    let date = new Date(order.createdAt)
    return (
        <div className={styles.order}>
            <span >Номер заказа: </span>
            <span className={styles.id}>{order._id}</span>
            <span >Адрес:</span>
            <span >{order.address}</span>
            <span >Стоимость:</span>
            <span className={styles.prise}>{parseInt(order.totalPrise).toLocaleString('ru-RU')} руб.</span>
            <span >Статус:</span>
            <span >{order.state}</span>
            <span >Дата заказа: </span>
            <span className={styles.date}>{date.toLocaleString()}</span>
            <div className={styles.button}><NavLink to={'/orders/'+order._id}>Перейти к заказу</NavLink></div>
        </div>
    )
};
export default Order;