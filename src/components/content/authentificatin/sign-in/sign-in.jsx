import React from "react";
import styles from './sign-in.module.css'
import formStyles from '../form-styles.module.css'
import {Field, reduxForm, SubmissionError} from "redux-form";
import renderField from "../helpers/field-with-validators";
import {email, min6max20, required} from "../helpers/validators";
import userApi from "../../../../api/auth-api";
import jwtDecode from 'jwt-decode'
const submit = values => {

    userApi.signin(values).then((response)=>{
    }).catch(err=>console.log(err));

};
const SignIn = (props)=>{

    return(
        <fieldset className={formStyles.form}>
            <legend className={styles.legend}><h3>Войти</h3></legend>
            <form onSubmit={props.handleSubmit(submit)} className={formStyles.body}>
                <div >
                    <Field name="email" component={renderField} type="email"
                           placeholder={'Введите e-mail...'} validate={[required, email]}/>
                </div>
                <div >
                    <Field name="password" component={renderField} type="password"
                           placeholder={'Введите пароль...'} validate={[required, min6max20]}/>
                </div>
                <button type="submit" className={formStyles.button}>Войти</button>
            </form>
        </fieldset>
    )
};
export default reduxForm({form: 'signIn'})(SignIn)
