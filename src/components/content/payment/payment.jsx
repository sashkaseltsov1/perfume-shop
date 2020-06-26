import React from "react";
import styles from './payment.module.css';
import TextWithLine from "../../templates/text-with-line/text-with-line";
import config from "../../../config/config";
import MainBanner from "../../templates/main-banner/main-banner";
import SimpleSwiper from "../../templates/swiper/swiper";
import success from "../../../images/success.svg";
const slides = [
    {
        image:`${config.apiUrl}banners/banner2.jpg`,
        path:'../shop/catalog'
    },
    {
        image:`${config.apiUrl}banners/banner1.jpg`,
        path:'../shop/catalog'
    },
];
const items = slides.map(item=><div key={item.image}><MainBanner image={item.image} path={item.path}/></div>);
const Payment = ()=>{
    return (
        <div className={styles.payment}>
            <TextWithLine name={'Способы оплаты'}/>
            <div>
                Пожалуйста, обратите внимание, что использование некоторых видов оплаты имеет ограничения,
                зависящие от способа доставки, суммы заказа и местонахождения заказчика. При оформлении
                заказа вам будут предложены только доступные формы оплаты.
            </div>
            <div className={styles.large}>
                <img src={success} alt={success} className={styles.img}/>
                Оплата наличными при получении заказа
            </div>
            <div>
                При получении вы оплачиваете заказ наличными, получаете товарный чек, содержащий
                информацию о вашем заказе и все товарные позиции.
                Пожалуйста, обратите внимание, максимальная сумма заказа при оплате наличными -
                от 100 000 до 150 000 рублей (в зависимости от региона).
            </div>
            <div className={styles.large}>
                <img src={success} alt={success} className={styles.img}/>
                Оплата электронной подарочной картой
            </div>
            <div>
                Для оплаты вам необходимо ввести номер карты и код из смс. После успешного
                ввода, нужно указать сумму списания, не превыщающую сумму заказа. Оплата возможна
                только в 100% размере заказа, нельзя доплатить картой или наличными.
            </div>
            <div className={styles.large}>
                <img src={success} alt={success} className={styles.img}/>
                Оплата банковской картой онлайн
            </div>
            <div>
                Сразу после оформления заказа, вы можете оплатить ваш заказ банковской картой Visa,
                MasterCard/Maestro или МИР. Заполните все необходимые поля данными вашей
                кредитной карты и нажмите кнопку "Оплатить".
            </div>
            <SimpleSwiper slides={items} portion={1} space={1}/>
        </div>
    )
};

export default Payment;