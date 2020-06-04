import React from "react";
import styles from './product.module.css';
import Image from "../../templates/image/image";
import newItem from "../../../images/offer-items/new.svg";
import discount from "../../../images/offer-items/discount.svg";
import star from '../../../images/star.svg';
import TextWithLine from "../../templates/text-width-line/text-with-line";
import Comments from "./comments/comments";

const comments = [
    {
        _id:1,
        username:'sasa',
        message:'privet poka kyky kekeke!!!',
        stars:5,
        createdAt:'2020-05-30T17:05:17.538Z'
    },
    {
        _id:2,
        username:'sasa',
        message:'privet poka kyky kekeke!!!',
        stars:3.2,
        createdAt:'2020-05-30T17:05:17.538Z'
    },
    {
        _id:3,
        username:'sasa',
        message:'privet poka kyky kekeke!!!',
        stars:4.5,
        createdAt:'2020-05-30T17:05:17.538Z'
    },
    {
        _id:4,
        username:'sasa',
        message:'privet poka kyky kekeke!!!',
        stars:2.3,
        createdAt:'2020-05-30T17:05:17.538Z'
    },
];
const Product = ({product})=>{
    console.log(product)
    return(
        <div className={styles.product}>
            <div className={styles.leftArea}>
                <div className={styles.additions}>
                    {product?.isNovelty && <img src={newItem} alt={newItem}/>}
                    {product?.isDiscount && <img src={discount} alt={discount}/>}
                </div>
                <div>
                    <Image image={product?.image}/>
                </div>
            </div>
            <fieldset className={styles.rightArea}>
                <legend className={styles.legend}>Товар</legend>
                <div className={styles.params}>
                    <div>Название:</div>
                    <div className={styles.name}>{product?.name}</div>
                    <div>Тип:</div>
                    <div className={styles.perfumeType}>{product?.perfumeType.type}</div>
                    <div>Брэнд:</div>
                    <div >{product?.brand.type}</div>
                    <div>Цена:</div>
                    <div className={styles.name}>
                        {product && parseInt(product.fullPrise).toLocaleString('ru-RU')} руб.
                    </div>
                    <div>Пол:</div>
                    <div >{product?.gender.type}</div>
                    <div>Аромат:</div>
                    <div >
                        {product && product.fragrance.map(item=><span key={item._id} >
                            {item.type+' '}
                        </span>)}
                    </div>
                    <div>Объем:</div>
                    <div >{product?.amount} мл.</div>
                    <div>Рейтинг:</div>
                    <div className={styles.name}>{product?.star|| 0} <img src={star} alt={star} className={styles.star}/></div>
                    <div>Описание:</div>
                    <div >{product?.description}</div>
                    <button className={styles.button} >
                        <span>Добавить в корзину</span>
                    </button>
                </div>

            </fieldset>
            <div className={styles.bottomArea}>
                <TextWithLine name={'Отзывы'}/>
                <Comments comments={comments}/>
            </div>
        </div>
    )
};

export default Product;