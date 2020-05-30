import React from "react";
import styles from './order.module.css'
import {NavLink} from "react-router-dom";

const Order = ({order})=>{
    let date = new Date(order.createdAt)
    return (
        <div className={styles.order}>
            <span className={styles.title}>Номер заказа: </span>
            <span className={styles.prm}>{order._id}</span>
            <span className={styles.title}>Адрес:</span>
            <span className={styles.prm}>{order.address}</span>
            <span className={styles.title}>Стоимость:</span>
            <span className={styles.prm}>{parseInt(order.totalPrise).toLocaleString('ru-RU')} руб.</span>
            <span className={styles.title}>Статус:</span>
            <span className={styles.prm}>{order.state}</span>
            <span className={styles.title}>Дата заказа: </span>
            <span className={styles.prm}>{date.toLocaleString()}</span>
            <div className={styles.button}><NavLink to={'/orders/'+order._id}>Перейти к заказу</NavLink></div>
        </div>
    )
};
export default Order;