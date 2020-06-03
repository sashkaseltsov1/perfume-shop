import React from "react";
import styles from './order.module.css';
import History from "./history/history";
import TextWithLine from "../../templates/text-width-line/text-with-line";
import SimpleSwiper from "../../templates/swiper/swiper";


const Order = ({error, order})=>{
    /*let array = [{state:'Принят на рассмотрение', date:'2020-05-30T17:05:17.538Z'},
        {state:'Отправлен', date:'2020-05-30T17:05:17.538Z'},
        {state:'Прибыл в место назначения', date:'2020-05-30T17:05:17.538Z'},
        {state:'Закрыт', date:'2020-05-30T17:05:17.538Z'},
    ];*/
    return (
        <div>
            {error && <div className={styles.error}>{error}</div>}
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Заказ № {order?._id}</legend>
                <div className={styles.order}>
                    <div>Адрес:</div>
                    <div>{order?.address}</div>
                    <div>Тип платежа:</div>
                    <div>{order?.paymentType}</div>
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
            <SimpleSwiper items={order? order.products:undefined}/>
        </div>
    )
};

export default Order;
