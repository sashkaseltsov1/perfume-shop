import React from "react";
import styles from './cart.module.css';
import TextWithLine from "../../templates/text-with-line/text-with-line";
import Image from "../../templates/image/image";
import close from "../../../images/close.svg";
import {NavLink} from "react-router-dom";
import AddOrder from "./add-order/add-order";
import Button from "../../templates/button/button";

const Cart = (props)=>{
    return(
        <div className={styles.cart}>
            <TextWithLine name={'Корзина'}/>
            {props.products && props.products.length<1 && <div>
                Ваша корзина пока пуста...
            </div>}
            {props.products && props.products.length>0 &&
                <Button title={'Очистить корзину'} callback={()=>{
                    localStorage.removeItem('cart');
                    props.setCartThunkCreator();
                }} style={{
                    backgroundColor:'#c12020',
                    borderRadius:'2px',
                    width:'150px',
                    marginBottom:'20px'
                }
                }/>}
            {props.products && props.products.map(product=><div key={product._id} className={styles.item}>
                <NavLink to={'/shop/catalog/'+product._id}><Image image={product.image}/></NavLink>
                <div className={styles.description}>
                    <div className={styles.name}><NavLink to={'/shop/catalog/'+product._id}>{product.name}</NavLink></div>
                    <div className={styles.perfumeType}>{product.perfumeType?.type}</div>
                    <div className={styles.fullPrise}>{parseInt(product.fullPrise).toLocaleString('ru-RU')} руб.</div>
                </div>
                <div className={styles.number}>
                    {product.count} шт.
                </div>
                <div className={styles.remove}>
                    <img src={close} alt={close}
                         onClick={()=>props.removeProductThunkCreator(product)}/>
                </div>
            </div>)}
            {props.products && props.products.length>0 &&<div>
                <div className={styles.total}>
                    Кол-во товаров:
                    <span >{' '+props.totalCount} шт.</span>
                </div>
                <div className={styles.total}>
                    Общая сумма:
                    <span >{' '+parseInt(props.totalPrise).toLocaleString('ru-RU')} руб.</span>
                </div>
            </div>}
            {props.products && props.products.length>0 &&<AddOrder/>}
        </div>
    )
};

export default Cart;