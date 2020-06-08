import React from "react";
import styles from "./radio-input.module.css";
import {Field} from "redux-form";

const RadioInput = ({image, name, value})=>{
    return (
        <label>
            <Field name={name} component="input" type="radio" value={value} />
            <div className={styles.deliveryType}>
                <div className={styles.image}>
                    <img src={image} alt=""/>
                </div>
            </div>
        </label>
    )
};

export default RadioInput;