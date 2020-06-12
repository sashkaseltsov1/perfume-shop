import React from "react";
import styles from './button.module.css';
import loader from "../../../images/white-loader.svg";

const Button = ({type='', disabled=false, title='', style={}, callback=()=>{}, ...props})=>{

    return <button type={type}
                   disabled={disabled}
                   className={styles.button}
                   onClick={callback}
                   style={style}>
        {disabled &&<div className={styles.loader}><img src={loader} alt={loader}/></div>}
        <span>{title}</span>
        {props.children}
    </button>
};
export default Button;