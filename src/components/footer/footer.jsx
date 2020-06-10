import React from "react";
import styles from './footer.module.css'
import wrap from '../wrapper.module.css'
import cn from 'classnames'
import {NavLink} from "react-router-dom";
import vk from '../../images/contacts/vk.svg';
import {contacts} from "../content/contacts/contacts";



const Footer = ()=>{
    return(
        <div className={styles.back}>
            <div className={cn(wrap.wrapper, styles.footer)}>
                <div>

                    <div ><NavLink to={'/shop/catalog'}>Каталог</NavLink></div>
                    <div ><NavLink to={'/auth'}>Регистрация</NavLink></div>
                    <div ><NavLink to={'/contacts'}>Связаться с нами</NavLink></div>
                </div>
                <div>
                    <div ><NavLink to={'/info'}>Информация</NavLink></div>
                    <div ><NavLink to={'/payment'}>Оплата</NavLink></div>
                    <div ><NavLink to={'/delivery'}>Доставка</NavLink></div>
                </div>
                <div>
                    <div ><NavLink to={'/'}>На главную</NavLink></div>
                    <div ><NavLink to={'/profile'}>Профиль</NavLink></div>
                    <div ><NavLink to={'/shop/cart'}>Корзина</NavLink></div>
                </div>
                <div className={styles.contacts}>
                    <a href={contacts[0].link}>
                        <img src={contacts[0].image} alt={vk}/>
                    </a>
                    <a href={contacts[1].link}>
                        <img src={contacts[4].image} alt={vk}/>
                    </a>
                    <a href={contacts[2].link}>
                        <img src={contacts[2].image} alt={vk}/>
                    </a>
                    <a href={contacts[3].link}>
                        <img src={contacts[3].image} alt={vk}/>
                    </a>
                </div>
            </div>

        </div>
    )
};
export default Footer;