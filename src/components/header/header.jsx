import React from 'react';
import styles from './header.module.css'
import wrap from '../wrapper.module.css'
import cn from 'classnames'
import HeaderDescription from "./header-description/headerDescription";
import Auth from "./header-auth/auth";
const Header = (props)=>{
    return(

            <div className={styles.back}>
                <div className={cn(wrap.wrapper, styles.main)}>
                    <div/>
                    <HeaderDescription />
                    <Auth status={false}/>
                </div>
            </div>

    )
}

export default Header