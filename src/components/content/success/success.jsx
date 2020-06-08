import React from "react";
import styles from './success.module.css';
import success from '../../../images/success.svg';
import {NavLink} from "react-router-dom";

const Success = ()=>{
    return (
        <div className={styles.success}>
            <div className={styles.box}>
                <img src={success} alt={success}/>
                <div className={styles.description}>
                    <div>Поздравляем! Ваш заказ успешно оформлен!</div>
                    <div>В ближайшее время менеджер свяжется с вами для уточнения деталей заказа.</div>
                    <div>
                        Чтобы узнать о состоянии заказа перейдите на <NavLink to={'../profile'}>страницу заказов</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Success;