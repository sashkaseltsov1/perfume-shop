import React, {useState} from 'react'
import styles from './mobile-menu.module.css'
import image from '../../../images/mobile-menu.png'
import items from './menu-items'
import {NavLink} from "react-router-dom";
import cn from 'classnames'

const MobileMenu = () => {
    const [menuItemsState, setMenuItemsState] = useState(false)

    return (
        <div className={styles.content}>
            <div className={cn(styles.menuButton, menuItemsState && styles.buttonHovered)}
                 onMouseEnter={() => setMenuItemsState(true)}
                 onMouseLeave={() => setMenuItemsState(false)}>
                <img src={image} alt=''/>
            </div>
            <div className={cn(styles.menuItems, !menuItemsState && styles.hideMenuItems)}
                 onMouseEnter={() => setMenuItemsState(true)}
                 onMouseLeave={() => setMenuItemsState(false)}>
                <ul>
                    {items.map(item => (<li><NavLink to={item.url}>{item.name}</NavLink></li>))}
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu