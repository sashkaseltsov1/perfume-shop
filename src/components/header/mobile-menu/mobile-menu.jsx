import React, {useEffect, useRef} from 'react'
import styles from './mobile-menu.module.css'
import image from '../../../images/bars.svg'
import cn from 'classnames'
import MenuItemsContainer from "./menu-items-container";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

const MobileMenu = (props) => {
    const targetRef = useRef();

    useEffect(()=>{
        !props.menuItemsState? enableBodyScroll(targetRef.current):
            disableBodyScroll(targetRef.current, {reserveScrollBarGap: true})
    }, [props.menuItemsState]);

    const getScrollbarWidth = ()=> {
        return window.innerWidth - document.documentElement.clientWidth;
    };
    return (
        <div className={styles.content}>
            <div className={cn(styles.menuButton, props.menuItemsState && styles.rotateButton)}
                 onClick={() => props.menuButtonClickHandler()}>
                <img src={image} alt='menuButton'/>
            </div>
            <div
                className={cn(styles.menuItems, (!props.isTabletOrMobile || !props.menuItemsState) && styles.hideMenuItems)}
                style={ {'--scroll-bar-width': getScrollbarWidth()+'px'}}>
                <MenuItemsContainer menuButtonClickHandler={props.menuButtonClickHandler}
                                    menuItemsState={props.menuItemsState} targetRef={targetRef}/>
            </div>
        </div>
    )
};

export default MobileMenu