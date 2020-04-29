import React from 'react'
import {NavLink} from "react-router-dom";
import styles from './menu-items.module.css'
import image from '../../../images/arrow.png'

const MenuItems=(props)=>{
    return (
        <ul className={styles.menu} >
            <li >
                <div onClick={()=>props.setCatalogState(!props.catalogState)}><div>Каталог</div><img src={image} /></div>
                <ul className={props.catalogState && styles.hideCatalog}>
                    <li><NavLink to={'/shop/women'}>Женские ароматы</NavLink></li>
                    <li><NavLink to={'/shop/men'}>Мужские ароматы</NavLink></li>
                    <li><NavLink to={'/shop/niche'}>Нишевая парфюмерия</NavLink></li>
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


