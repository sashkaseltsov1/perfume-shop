import React from "react";
import styles from './sign-up.module.css'
import {Field, reduxForm} from "redux-form";
import {email, min2max30, min6max20, required} from "../helpers/validators";
import formStyles from '../form-styles.module.css';
import renderField from "../helpers/field-with-validators";
import Button from "../../../templates/button/button";
import {onSubmitActions} from "redux-form-submit-saga";
import {SIGN_UP_FORM} from "../../../../store/redux-form-actions/sign-up";
const SignUp = (props)=>{

    return(
        <fieldset className={formStyles.form}>
            <legend className={styles.legend}><h3>Зарегистрироваться</h3></legend>
            <form onSubmit={props.handleSubmit} className={formStyles.body}>
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
                <Button type={'submit'} disabled={props.submitting} title={'Зарегистрироваться'} style={{backgroundColor:'seagreen'}}/>
                {props.error && <div className={formStyles.error}><span >{props.error}</span></div>}
                {props.submitSucceeded && <div className={formStyles.error}>
                    <span style={{'color':'green'}}>Регистрация прошла успешно!</span>
                </div>}
            </form>
        </fieldset>
    )
};
export default reduxForm({form: 'signUp', onSubmit: onSubmitActions(SIGN_UP_FORM)})(SignUp);
