import React from "react";
import styles from './sign-in.module.css'
import formStyles from '../form-styles.module.css'
import {Field, reduxForm} from "redux-form";
import renderField from "../helpers/field-with-validators";
import {min6max15, required} from "../helpers/validators";
const SignIn = (props)=>{

    return(
        <fieldset className={formStyles.form}>
            <legend className={styles.legend}><h3>Войти</h3></legend>
            <form onSubmit={()=>{}} className={formStyles.body}>
                <div >
                    <Field name="username" component={renderField} type="text"
                           placeholder={'Введите логин...'} validate={[required, min6max15]}/>
                </div>
                <div >
                    <Field name="password" component={renderField} type="password"
                           placeholder={'Введите пароль...'} validate={[required, min6max15]}/>
                </div>
                <button type="submit" className={formStyles.button}>Войти</button>
            </form>
        </fieldset>
    )
};
export default reduxForm({form: 'signIn'})(SignIn)
