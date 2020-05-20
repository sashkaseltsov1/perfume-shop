import React from 'react'
import wrap from '../wrapper.module.css'
import styles from './navnar.module.css'
import {NavLink} from "react-router-dom";
import catalog from '../../images/menu-image/travel.svg';
import delivery from '../../images/menu-image/airplane.svg';
import payment from '../../images/menu-image/notes.svg';
import help from '../../images/menu-image/signpost.svg';
import contacts from '../../images/menu-image/contact-book.svg';
import cn from 'classnames'
import image from "../../images/bars.svg";

const Navbar = (props) => {
    return (
        <div className={wrap.wrapper} ref={props.targetRef}>
            {props.menuItemsState &&<div className={styles.back} onClick={props.menuItemClickHandler}>

            </div>}
                <div className={cn(styles.menuButton, props.menuItemsState && styles.rotateButton)}>
                    <img src={image} alt='menuButton'
                         onClick={props.menuButtonClickHandler}/>
                </div>

                <ul className={cn(styles.navWrapper, props.menuItemsState && styles.show)}>
                    <li><NavLink onClick={props.menuItemClickHandler}
                                 to={'/shop/catalog'}><img src={catalog} alt={catalog}/>Каталог</NavLink></li>
                    <li><NavLink onClick={props.menuItemClickHandler}
                                 to={'/delivery'}><img src={delivery} alt={delivery}/>Доставка</NavLink></li>
                    <li><NavLink onClick={props.menuItemClickHandler}
                                 to={'payment'}><img src={payment} alt={payment}/>Оплата</NavLink></li>
                    <li><NavLink onClick={props.menuItemClickHandler}
                                 to={'help'}><img src={help} alt={help}/>Помощь</NavLink></li>
                    <li><NavLink onClick={props.menuItemClickHandler}
                                 to={'contacts'}><img src={contacts} alt={contacts}/>Контакты</NavLink></li>
                </ul>


            <hr className={styles.line}/>
        </div>
    )
}
export default Navbar;

