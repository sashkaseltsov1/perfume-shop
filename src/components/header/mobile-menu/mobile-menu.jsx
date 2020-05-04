import React from 'react'
import styles from './mobile-menu.module.css'
import image from '../../../images/bars.svg'
import cn from 'classnames'
import MenuItemsContainer from "./menu-items-container";

const MobileMenu = (props) => {

    return (
        <div className={styles.content}>
            <div className={cn(styles.menuButton, props.menuItemsState && styles.rotateButton)}
                 onClick={() => props.menuButtonClickHandler()}>
                <img src={image} alt='menuButton'/>
            </div>
            <div
                className={cn(styles.menuItems, (!props.isTabletOrMobile || !props.menuItemsState) && styles.hideMenuItems)}
                style={props.scrollBarWidth.style}>
                <MenuItemsContainer menuButtonClickHandler={props.menuButtonClickHandler}
                                    menuItemsState={props.menuItemsState} targetRef={props.targetRef}/>
            </div>
        </div>
    )
};

export default MobileMenu