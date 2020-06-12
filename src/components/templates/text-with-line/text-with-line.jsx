import React from "react";
import styles from './text-with-line.module.css'

const TextWithLine = (props)=>{
    return (
        <p className={styles.hr}>{props.name}</p>
    )
}

export default TextWithLine