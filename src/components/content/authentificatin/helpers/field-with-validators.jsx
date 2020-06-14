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
                         autoComplete,
                         meta: { touched, error }
                     }) => (
    <div className={styles.sector}>
        <textarea {...input}
               placeholder={placeholder}
               autoComplete={autoComplete? autoComplete:'on'}

               className={cn(styles.textarea, touched&&error&& styles.errorField)}/>
        {touched &&
        ((error && <span className={styles.errorSpan}>{error}</span>))}
    </div>
);


export const renderCheckboxes =({category, callback, input, meta})=>{

    return (
        <div>
            {meta.initial?.map((option) => {

                return (
                    <div className={styles.checkbox} key={option._id}>
                        <label>
                            <input type="checkbox"
                                   name={`${input.name}[${option._id}]`}
                                   value={option._id}
                                   checked={option.state}
                                   onChange={(event) => {
                                       callback(category, option._id, event.target.checked)
                                   }}

                            />
                            {option.type}
                        </label>
                    </div>)
            })}
        </div>
    )
};



export default renderField;