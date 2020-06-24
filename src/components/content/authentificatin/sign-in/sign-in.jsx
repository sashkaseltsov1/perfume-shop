import React from "react";
import styles from './sign-in.module.css'
import formStyles from '../form-styles.module.css'
import {Field, reduxForm} from "redux-form";
import renderField from "../helpers/field-with-validators";
import {email, min6max20, required} from "../helpers/validators";
import Button from "../../../templates/button/button";
import {SIGN_IN_FORM} from "../../../../store/redux-form-actions/sign-in";
import {onSubmitActions} from "redux-form-submit-saga";

const SignIn = (props)=>{
    return(
        <fieldset className={formStyles.form}>
            <legend className={styles.legend}><h3>Войти</h3></legend>
            <form onSubmit={props.handleSubmit} className={formStyles.body}>
                <div >
                    <Field name="email" component={renderField} type="email"
                           placeholder={'Введите e-mail...'} validate={[required, email]}/>
                </div>
                <div >
                    <Field name="password" component={renderField} type="password"
                           placeholder={'Введите пароль...'} validate={[required, min6max20]}/>
                </div>
                <Button type={'submit'} disabled={props.submitting} title={'Войти'}/>
                {props.error && <div className={formStyles.error}><span >{props.error}</span></div>}
            </form>
        </fieldset>
    )
};
export default reduxForm({form: 'signIn', onSubmit: onSubmitActions(SIGN_IN_FORM)})(SignIn)
