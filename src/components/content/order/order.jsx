import React from "react";
import styles from './order.module.css';
import History from "./history/history";
import TextWithLine from "../../templates/text-width-line/text-with-line";
import SimpleSwiper from "../../templates/swiper/swiper";
import Item from "../../templates/item/item";
import {getInitialItems} from "../../templates/swiper/swiper-container";


const Order = ({error, order})=>{

    const slides = order? order.products.map((item, index) => (
        <div key={item._id+index} className={'slide'}>
            <Item item={item}/>
        </div>)):
        getInitialItems().map(item => (<div key={item._id} className={'slide'}><Item item={item}/></div>));
    return (
        <div className={styles.orderPage}>
            {error && <div className={styles.error}>{error}</div>}
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Заказ № {order?._id}</legend>
                <div className={styles.order}>
                    <div>Адрес:</div>
                    <div>{order?.address}</div>
                    <div>Тип платежа:</div>
                    <div>{order?.paymentType}</div>
                    <div>Тип доставки:</div>
                    <div>{order?.deliveryType}</div>
                    <div>Стоимость:</div>
                    <div className={styles.prise}>
                        {order && parseInt(order.totalPrise).toLocaleString('ru-RU')} руб.
                    </div>
                    <div>Статус:</div>
                    <div>{order?.state}</div>
                    <div>Дата создания:</div>
                    <div className={styles.date}>{order && new Date(order.createdAt).toLocaleString()}</div>
                    <div>Обновлен:</div>
                    <div className={styles.date}>{order && new Date(order.updatedAt).toLocaleString()}</div>
                    <div>История:</div>
                    <History history={order?.history}/>
                </div>
            </fieldset>
            <TextWithLine name={'Товары'}/>
            <SimpleSwiper slides={slides}/>
        </div>
    )
};

export default Order;
