import React from 'react'
import wrap from '../wrapper.module.css'
import styles from './navnar.module.css'
import {NavLink} from "react-router-dom";
const Navbar = ()=>{
    return (
        <div className={wrap.wrapper}>
                <ul className={styles.navWrapper}>
                        <li><NavLink to={'/shop'}>Каталог</NavLink></li>
                        <li><NavLink to={'/delivery'}>Доставка</NavLink></li>
                        <li><NavLink to={'payment'}>Оплата</NavLink></li>
                        <li><NavLink to={'help'}>Помощь</NavLink></li>
                        <li><NavLink to={'contacts'}>Контакты</NavLink></li>
                </ul>
                <hr className={styles.line}/>
        </div>
        )
}

export default Navbar