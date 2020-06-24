import React, {useState} from "react";
import styles from './product.module.css';
import Image from "../../templates/image/image";
import newItem from "../../../images/offer-items/new.svg";
import discount from "../../../images/offer-items/discount.svg";
import star from '../../../images/star.svg';
import TextWithLine from "../../templates/text-with-line/text-with-line";
import Comments from "./comments/comments";
import AddComment from "./add-comment/add-comment";
import {CSSTransition} from "react-transition-group";
import './product.css';
import Button from "../../templates/button/button";
import {NavLink} from "react-router-dom";

const Product = ({
                     product,
                     addCommentThunkCreator,
                     match,
                     fetchNextCommentsActionCreator,
                     isFetching,
                     appendProductCartActionCreator,
                     role})=>{
    const [inProp, setInProp] = useState(true);
    return(
        <div>
            {role==='Admin' && <NavLink to={'/shop/edit-product/'+ product?._id} className={styles.edit}>Редактировать</NavLink>}
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
                        <div className={styles.perfumeType}>{product?.perfumeType?.type}</div>
                        <div>Брэнд:</div>
                        <div >{product?.brand?.type}</div>
                        <div>Цена:</div>
                        <div className={styles.name}>
                            {product && parseInt(product.fullPrise).toLocaleString('ru-RU')} руб.
                        </div>
                        <div>Пол:</div>
                        <div >{product?.gender?.type}</div>
                        <div>Аромат:</div>
                        <div >
                            {product && product.fragrance.map(item=><span key={item._id} >
                            {item.type+' '}
                        </span>)}
                        </div>
                        <div>Объем:</div>
                        <div >{product?.amount} мл.</div>
                        <div>Рейтинг:</div>
                        <div className={styles.name}>{product?.stars|| 0} <img src={star} alt={star} className={styles.star}/></div>
                        <div className={styles.descTitle}><TextWithLine name={'Описание'}/></div>

                        <div className={styles.description} style={{lineHeight:'20px'}}>{product?.description}</div>
                        <div className={styles.button}>
                            <Button title={'Добавить в корзину'} callback={()=>{
                                if(product){
                                    setInProp(!inProp);
                                    appendProductCartActionCreator(product)
                                }
                            }}>
                                <CSSTransition in={inProp} timeout={2000} classNames={'added'}>
                                    <div className={styles.append}>Продукт добавлен!</div>
                                </CSSTransition>
                            </Button>
                        </div>
                    </div>
                </fieldset>
                <div className={styles.bottomArea}>
                    <AddComment productId={product?._id} addCommentThunkCreator={addCommentThunkCreator}/>
                    <TextWithLine name={'Отзывы'}/>
                    <div style={{'marginBottom':'20px'}}>Всего отзывов: {product?.commentsCount}</div>
                    <Comments comments={product?.comments} role={role} productId={product?._id}/>
                    {product?.comments.length<product?.commentsCount && <div className={styles.showNextButton}>
                    <Button title={'Показать еще'} disabled={isFetching} callback={()=>{
                        !isFetching && fetchNextCommentsActionCreator(match.params.id);
                    }}/></div>
                    }
                </div>
            </div>
        </div>

    )
};

export default Product;