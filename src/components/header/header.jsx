import React from 'react';
import styles from './header.module.css'
import wrap from '../wrapper.module.css'
import cn from 'classnames'
import HeaderDescription from "./header-description/headerDescription";
import MobileMenuContainer from "./mobile-menu/mobile-menu-container";
const Header = (props)=>{
    return(

            <div className={styles.back}>
                <div className={cn(wrap.wrapper, styles.main)}>
                    <MobileMenuContainer />
                    <HeaderDescription />
                    <div>sasa3</div>
                </div>
            </div>

    )
}

export default Header