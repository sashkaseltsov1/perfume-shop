import React from 'react';
import styles from './header.module.css'
import wrap from '../wrapper.module.css'
import cn from 'classnames'
import HeaderDescription from "./header-description/headerDescription";
const Header = (props)=>{
    return(

            <div className={styles.back}>
                <div className={cn(wrap.wrapper, styles.main)}>
                    <div/>
                    <HeaderDescription />
                    <div>sasa3</div>
                </div>
            </div>

    )
}

export default Header