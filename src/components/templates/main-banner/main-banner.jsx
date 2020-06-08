import React from "react";
import styles from "./main-banner.module.css";
import {NavLink} from "react-router-dom";


const MainBanner = ({image, path})=>{
    return(
        <div className={styles.banner}>
            <NavLink to={path}>
                <img src={image} alt={image}/>
            </NavLink>
        </div>
    )
};

export default MainBanner;