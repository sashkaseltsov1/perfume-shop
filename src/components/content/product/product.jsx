import React, {useState} from "react";
import styles from './product.module.css';
import Image from "../../templates/image/image";
import newItem from "../../../images/offer-items/new.svg";
import discount from "../../../images/offer-items/discount.svg";
import star from '../../../images/star.svg';
import TextWithLine from "../../templates/text-width-line/text-with-line";
import Comments from "./comments/comments";
import AddComment from "./add-comment/add-comment";
import formStyles from "../authentificatin/form-styles.module.css";
import loader from "../../../images/white-loader.svg";
import {CSSTransition} from "react-transition-group";
import './product.css';

const Product = ({
                     product,
                     addCommentThunkCreator,
                     match,
                     appendCommentsThunkCreator,
                     isFetching,
                     appendProductThunkCreator,
                     role})=>{
    const [inProp, setInProp] = useState(true);
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
                    <div className={styles.name}>{product?.stars|| 0} <img src={star} alt={star} className={styles.star}/></div>
                    <div>Описание:</div>
                    <div >{product?.description}</div>
                    <button className={styles.button} onClick={()=>{
                        setInProp(!inProp);
                        appendProductThunkCreator(product)
                    }}>
                        <span>Добавить в корзину</span>
                        <CSSTransition in={inProp} timeout={2000} classNames={'added'}>
                            <div className={styles.append}>Продукт добавлен!</div>
                        </CSSTransition>
                    </button>
                </div>
            </fieldset>
            <div className={styles.bottomArea}>
                <div className={styles.edit}>Редактировать</div>
                <AddComment match={match} addCommentThunkCreator={addCommentThunkCreator}/>
                <TextWithLine name={'Отзывы'}/>
                <div style={{'marginBottom':'20px'}}>Всего отзывов: {product?.commentsCount}</div>
                <Comments comments={product?.comments} role={role} productId={product?._id}/>
                {product?.comments.length<product?.commentsCount && <div className={styles.next}
                onClick={()=>{
                    !isFetching && appendCommentsThunkCreator(match.params.id);
                }}>
                    {isFetching && <div className={formStyles.loader}><img src={loader} alt={loader}/></div>}
                    Показать ещё
                </div>}
            </div>
        </div>
    )
};

export default Product;