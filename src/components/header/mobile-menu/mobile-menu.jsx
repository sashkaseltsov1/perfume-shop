import React, {useEffect, useRef, useState} from 'react'
import styles from './mobile-menu.module.css'
import image from '../../../images/mobile-menu.png'
import items from './menu-items'
import {NavLink} from "react-router-dom";
import cn from 'classnames'
import {useMediaQuery} from 'react-responsive'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const MobileMenu = (props) => {
    const [menuItemsState, setMenuItemsState] = useState(false)
    const targetRef = useRef()
    const [targetElement, setTargetElement] = useState(null)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)' })
    useEffect(() => {
        console.log("mount")
        setTargetElement(targetRef.current)
        return ()=>{clearAllBodyScrollLocks()}
    }, []);




    const menuButtonClickHandler = ()=>{
        window.scroll(0,0)
        setMenuItemsState(!menuItemsState)
        menuItemsState? enableBodyScroll(targetElement):disableBodyScroll(targetElement)

    }
    return (
        <div className={styles.content}>
            <div className={cn(styles.menuButton, menuItemsState && styles.rotateButton)}
                 onClick={()=>menuButtonClickHandler()}>
                <img src={image} alt=''/>
            </div>
            <div  className={cn(styles.menuItems, (!isTabletOrMobile || !menuItemsState) &&  styles.hideMenuItems) }>
                <ul ref={targetRef}>
                    {items.map(item => (<li key={item.url}><NavLink to={item.url}>{item.name}</NavLink></li>))}
                </ul>
            </div>
        </div>

    )
}

export default MobileMenu