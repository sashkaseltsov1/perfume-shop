import React from "react";
import styles from './sign-up.module.css'
import {Field, reduxForm} from "redux-form";
import {email, min2max30, min6max20, required} from "../helpers/validators";
import formStyles from '../form-styles.module.css';
import renderField from "../helpers/field-with-validators";
import loader from "../../../../images/loader.svg";
import {connect} from "react-redux";
import {signupThunkCreator} from "../../../../store/thunks/auth-thunks";

const SignUp = (props)=>{
    return(
        <fieldset className={formStyles.form}>
            <legend className={styles.legend}><h3>Зарегистрироваться</h3></legend>
            <form onSubmit={props.handleSubmit(values => props.signupThunkCreator(values)
            )} className={formStyles.body}>
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
                <button type="submit" className={formStyles.button}>
                    {props.submitting &&<div className={formStyles.loader}><img src={loader} alt={loader}/></div>}
                    <span>Зарегистрироваться</span>
                </button>
                {props.error && <div className={formStyles.error}><span >{props.error}</span></div>}
                {props.submitSucceeded && <div className={formStyles.error}>
                    <span style={{'color':'green'}}>Регистрация прошла успешно!</span>
                </div>}
            </form>
        </fieldset>
    )
};
export default connect(null, {signupThunkCreator})(reduxForm({form: 'signUp'})(SignUp));
