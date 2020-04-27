import React from 'react';
import styles from './header.module.css'
import wrap from '../wrapper.module.css'
import cn from 'classnames'
import HeaderDescription from "./header-description/headerDescription";
import MobileMenu from "./mobile-menu/mobile-menu";
const Header = ()=>{
    return(
    <div className={styles.back}>
        <div className={cn(wrap.wrapper, styles.main)}>
            <MobileMenu/>
            <HeaderDescription />
            <div>sasa3</div>
        </div>
    </div>
    )
}

export default Header