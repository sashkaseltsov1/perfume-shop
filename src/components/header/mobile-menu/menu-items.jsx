import React from 'react'
import {NavLink} from "react-router-dom";
import styles from './menu-items.module.css'
import image from '../../../images/arrow.png'

const MenuItems=(props)=>{
    return (
        <ul className={styles.menu} ref={props.targetRef}>
            <li >
                <div onClick={()=>props.setCatalogState(!props.catalogState)}><div>Каталог</div><img src={image} alt='arrow' /></div>
                <ul className={props.catalogState && styles.hideCatalog}>
                    <li onClick={()=>props.menuButtonClickHandler()}><NavLink to={'/shop/catalog'}>Все</NavLink></li>
                    <li onClick={()=>props.menuButtonClickHandler()}><NavLink to={'/shop/catalog'}>Для женщин</NavLink></li>
                    <li onClick={()=>props.menuButtonClickHandler()}><NavLink to={'/shop/catalog'}>Для мужчин</NavLink></li>
                    <li onClick={()=>props.menuButtonClickHandler()}><NavLink to={'/shop/catalog'}>Нишевая парфюмерия</NavLink></li>
                </ul>
            </li>
            <li onClick={()=>props.menuButtonClickHandler()}><NavLink to={'/delivery'}>Доставка</NavLink></li>
            <li onClick={()=>props.menuButtonClickHandler()}><NavLink to={'/payment'}>Оплата</NavLink></li>
            <li onClick={()=>props.menuButtonClickHandler()}><NavLink to={'/help'}>Помощь</NavLink></li>
            <li onClick={()=>props.menuButtonClickHandler()}><NavLink to={'/contacts'}>Контакты</NavLink></li>
        </ul>
    )
}

export default MenuItems


