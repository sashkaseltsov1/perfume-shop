import React from "react";
import styles from './sign-in.module.css'
import formStyles from '../form-styles.module.css'
import {Field, reduxForm} from "redux-form";
import renderField from "../helpers/field-with-validators";
import {email, min6max20, required} from "../helpers/validators";
import {useDispatch} from "react-redux";
import {signinThunkCreator} from "../../../../store/thunks/auth-thunks";
import cn from 'classnames';
import loader from "../../../../images/white-loader.svg";

const SignIn = (props)=>{
    const dispatch = useDispatch();
    return(
        <fieldset className={formStyles.form}>
            <legend className={styles.legend}><h3>Войти</h3></legend>
            <form onSubmit={props.handleSubmit(values => dispatch(signinThunkCreator(values))
            )} className={formStyles.body}>
                <div >
                    <Field name="email" component={renderField} type="email"
                           placeholder={'Введите e-mail...'} validate={[required, email]}/>
                </div>
                <div >
                    <Field name="password" component={renderField} type="password"
                           placeholder={'Введите пароль...'} validate={[required, min6max20]}/>
                </div>
                <button type="submit" disabled={props.submitting} className={cn(formStyles.button, styles.button)} >
                    {props.submitting &&<div className={formStyles.loader}><img src={loader} alt={loader}/></div>}
                    <span>Войти</span>
                </button>
                {props.error && <div className={formStyles.error}><span >{props.error}</span></div>}
            </form>
        </fieldset>
    )
};
export default reduxForm({form: 'signIn'})(SignIn)
