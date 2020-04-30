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
                    <li><NavLink to={'/shop/'}>Все</NavLink></li>
                    <li><NavLink to={'/shop/'}>Для женщин</NavLink></li>
                    <li><NavLink to={'/shop/'}>Для мужчин</NavLink></li>
                    <li><NavLink to={'/shop/'}>Нишевая парфюмерия</NavLink></li>
                </ul>
            </li>
            <li><NavLink to={'/delivery'}>Доставка</NavLink></li>
            <li><NavLink to={'/payment'}>Оплата</NavLink></li>
            <li><NavLink to={'/help'}>Помощь</NavLink></li>
            <li><NavLink to={'/contacts'}>Контакты</NavLink></li>
        </ul>
    )
}

export default MenuItems


