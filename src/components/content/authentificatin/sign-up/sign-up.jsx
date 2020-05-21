import React from "react";
import styles from './sign-up.module.css'
import {Field, reduxForm} from "redux-form";
import {email, min6max15, required} from "../helpers/validators";
import formStyles from '../form-styles.module.css';
import renderField from "../helpers/field-with-validators";
const submit = values => {

    console.log(values)
};

const SignUp = (props)=>{
    return(
        <fieldset className={formStyles.form}>
            <legend className={styles.legend}><h3>Зарегистрироваться</h3></legend>
            <form onSubmit={props.handleSubmit(submit)} className={formStyles.body}>
                <div >
                    <Field name="username" component={renderField} type="text"
                           placeholder={'Введите логин...'} validate={[required , min6max15]}/>
                </div>
                <div >
                    <Field name="email" component={renderField} type="email"
                           placeholder={'Введите e-mail...'} validate={[required, email]}/>
                </div>
                <div >
                    <Field name="password" component={renderField} type="password"
                           placeholder={'Введите пароль...'} validate={[required, min6max15]}/>
                </div>
                <div >
                    <Field name="confirmPassword" component={renderField} type="password"
                           placeholder={'Повторите пароль...'} validate={[required, min6max15]}/>
                </div>
{/*                {props.error && <strong>{props.error}</strong>}*/}
                <button type="submit" className={formStyles.button}>Зарегистрироваться</button>
            </form>
        </fieldset>
    )
};
export default reduxForm({form: 'signUp'})(SignUp)
