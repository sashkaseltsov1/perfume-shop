import React from "react";
import styles from './footer.module.css'
import wrap from '../wrapper.module.css'
import cn from 'classnames'
import {NavLink} from "react-router-dom";

const links=[
            {path:'./sss',title:'Самовывоз'},
            {path:'./sss',title:'Оплата'},
            {path:'./sss',title:'Доставка'},
            {path:'./sss',title:'Регистрация'},
            {path:'./sss',title:'Связаться с нами'},
            {path:'./sss',title:'Информация'},

        ];

const Footer = ()=>{
    return(
        <div className={styles.back}>
            <div className={cn(wrap.wrapper, styles.footer)}>
                {links.map(link=><div><NavLink to={link.path}>{link.title}</NavLink></div>)}
            </div>
        </div>
    )
};
export default Footer;