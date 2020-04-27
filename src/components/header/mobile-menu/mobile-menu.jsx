import React from 'react'
import styles from './mobile-menu.module.css'
import image from '../../../images/mobile-menu.png'

const MobileMenu = ()=>{
    return (
        <div className={styles.content}>
            <div className={styles.menuButton}>
                <img src={image} alt=''/>
            </div>
            <div className={styles.menuItems}>

            </div>
        </div>
    )
}

export default MobileMenu