import React, {useEffect} from "react";
import styles from "./edit-profile.module.css";
import edit from "../../../../images/edit.svg";

import {Field, reduxForm} from "redux-form";
import renderField from "../../authentificatin/helpers/field-with-validators";
import {email, min2max30, min6max20, required} from "../../authentificatin/helpers/validators";
import loader from "../../../../images/loader.svg";
import {connect} from "react-redux";
import {signinThunkCreator} from "../../../../store/thunks/auth-thunks";


const EditProfile = ({user, error, setState, handleSubmit, initialize})=>{
    useEffect(()=>{
        initialize({...user})
    },[]);
    return(
        <form
            onSubmit={handleSubmit(values => {})}
            /*onSubmit={props.handleSubmit(values => props.signinThunkCreator(values))}*/
            className={styles.profile}>
            <span>Имя:</span>
            <div >
                <Field name="name" component={renderField} type="text" defaultValue={user?.name}
                       placeholder={'Введите новое имя...'} validate={[required, min2max30]}/>
            </div>
            <div className={styles.close} onClick={() => setState(true)}>
                <img src={edit} alt={edit}/>
            </div>
            <span>Фамилия:</span>
            <div >
                <Field name="lastname" component={renderField} type="text" value={user?.lastname}
                       placeholder={'Введите новую фамилию...'} validate={[required, min2max30]}/>
            </div>
            <span>E-mail:</span>
            <div >
                <Field name="email" component={renderField} type="email" defaultValue={'sssss'}
                       placeholder={'Введите новый e-mail...'} validate={[required, email]}/>
            </div>
            <span>Телефон:</span>
            <div >
                <Field name="phone" component={renderField} type="text" defaultValue={user?.phone}
                       placeholder={'Введите новый телефон...'} validate={[required]}/>
            </div>
            <span>Адрес:</span>
            <div >
                <Field name="address" component={renderField} type="text" defaultValue={user?.address}
                       placeholder={'Введите новый адрес...'} validate={[required]}/>
            </div>
            <div >
                <Field name="password" component={renderField} type="password"
                       placeholder={'Введите пароль...'} validate={[required, min6max20]}/>
            </div>
            <button type="submit" className={styles.button} >
                {/*{props.submitting &&<div className={formStyles.loader}><img src={loader} alt={loader}/></div>}*/}
                <span>Войти</span>
            </button>
            {/*{props.error && <div className={formStyles.error}><span >{props.error}</span></div>}*/}
        </form>
    )
};
export default connect(null, {})(reduxForm({form: 'EditProfile'})(EditProfile))
