import cn from "classnames";
import React from "react";
import styles from './field-with-validators.module.css';
const renderField = ({
                         input,
                         placeholder,
                         type,
                         meta: { touched, error }
                     }) => (
    <div className={styles.sector}>

        <input {...input} placeholder={placeholder} type={type} className={cn(styles.field, touched&&error&& styles.errorField)}/>
        {touched &&
        ((error && <span className={styles.errorSpan}>{error}</span>))}
    </div>
);

export default renderField;