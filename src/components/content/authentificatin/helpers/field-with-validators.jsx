import cn from "classnames";
import React from "react";
import styles from './field-with-validators.module.css';
const renderField = ({
                         input,
                         placeholder,
                         type,
                         disableAutoComplete,
                         meta: { touched, error }
                     }) => (
    <div className={styles.sector}>
        <input {...input}
               placeholder={placeholder}

               autoComplete={disableAutoComplete? 'off':'on'}
               type={type}
               className={cn(styles.field, touched&&error&& styles.errorField)}/>
        {touched &&
        ((error && <span className={styles.errorSpan}>{error}</span>))}
    </div>
);
export const renderTextarea = ({
                         input,
                         placeholder,
                         type,
                         autoComplete,
                         meta: { touched, error }
                     }) => (
    <div className={styles.sector}>
        <textarea {...input}
               placeholder={placeholder}
               autoComplete={autoComplete? autoComplete:'on'}
               type={type}
               className={cn(styles.textarea, touched&&error&& styles.errorField)}/>
        {touched &&
        ((error && <span className={styles.errorSpan}>{error}</span>))}
    </div>
);

export default renderField;