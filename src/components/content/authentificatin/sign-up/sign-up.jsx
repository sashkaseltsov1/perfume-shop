import React from "react";
import styles from './sign-up.module.css'
import {Field, reduxForm, SubmissionError} from "redux-form";
import {email, min2max30, min6max20, required} from "../helpers/validators";
import formStyles from '../form-styles.module.css';
import renderField from "../helpers/field-with-validators";
import userApi from '../../../../api/auth-api'
const submit = values => {
    userApi.auth().then((response)=>{
        console.log(response);}).catch(err=>console.log(err));
    /*userApi.signup(values);
    console.log(values)
    throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
    })*/
};

const SignUp = (props)=>{
    return(
        <fieldset className={formStyles.form}>
            <legend className={styles.legend}><h3>Зарегистрироваться</h3></legend>
            <form onSubmit={props.handleSubmit(submit)} className={formStyles.body}>
                <div >
                    <Field name="name" component={renderField} type="text"
                           placeholder={'Введите имя...'} validate={[required , min2max30]}/>
                </div>
                <div >
                    <Field name="lastname" component={renderField} type="text"
                           placeholder={'Введите фимилию...'} validate={[required , min2max30]}/>
                </div>
                <div >
                    <Field name="email" component={renderField} type="email"
                           placeholder={'Введите e-mail...'} validate={[required, email]}/>
                </div>
                <div >
                    <Field name="password" component={renderField} type="password"
                           placeholder={'Введите пароль...'} validate={[required, min6max20]}/>
                </div>
                <div >
                    <Field name="confirmPassword" component={renderField} type="password"
                           placeholder={'Повторите пароль...'} validate={[required, min6max20]}/>
                </div>
                {props.error && <strong>{props.error}</strong>}
                <button type="submit" className={formStyles.button}>Зарегистрироваться</button>
            </form>
        </fieldset>
    )
};
export default reduxForm({form: 'signUp'})(SignUp)
