import React from "react";
import styles from "./image.module.css";

const Image = ({image})=>{
    return (
        <div className={styles.image}>
            <img src={image} alt={image}/>
        </div>
    )
};

export default Image;