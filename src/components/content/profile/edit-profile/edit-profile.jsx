import React, {useEffect} from "react";
import styles from "./edit-profile.module.css";
import close from "../../../../images/close.svg";
import {Field, reduxForm} from "redux-form";
import renderField from "../../authentificatin/helpers/field-with-validators";
import {min2max30, min6max20, required} from "../../authentificatin/helpers/validators";
import { useDispatch} from "react-redux";
import {editUserThunkCreator} from "../../../../store/thunks/user-thunks";
import normalizePhone from "./normalize-phone";
import AddressField from "./addresses/addresses";
import Button from "../../../templates/button/button";


const EditProfile = ({user, error, setState, handleSubmit, initialize, submitting, submitSucceeded, ...props})=>{
    useEffect(()=>{
        initialize({...user})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(()=>{
        submitSucceeded && setState(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[submitSucceeded]);
    const dispatch = useDispatch();
    return(
        <form
            onSubmit={handleSubmit(values => dispatch(editUserThunkCreator(values)))}
            className={styles.profile}>
            <div className={styles.field}>
                <Field name="name" component={renderField} type="text"
                       placeholder={'Введите новое имя...'} validate={[required, min2max30]}/>
            </div>
            <div className={styles.close} onClick={() => setState(true)}>
                <img src={close} alt={close}/>
            </div>
            <div className={styles.field}>
                <Field name="lastname" component={renderField} type="text"
                       placeholder={'Введите новую фамилию...'} validate={[required, min2max30]}/>
            </div>
            <div className={styles.field}>
                <Field name="phone" component={renderField} type="text"
                       placeholder={'Введите новый телефон...'} normalize={normalizePhone} />
            </div>
            <AddressField dispatch={props.dispatch} />
            <div className={styles.field}>
                <Field name="password" component={renderField} type="password"
                       placeholder={'Введите старый пароль...'} validate={[min6max20]}/>
            </div>
            <div className={styles.field}>
                <Field name="newPassword" component={renderField} type="password"
                       placeholder={'Введите новый пароль...'} validate={[min6max20]}/>
            </div>
            <div className={styles.button}>
                <Button title={'Редактировать'} type={'submit'} disabled={submitting} style={{backgroundColor:'#161515'}}/>
            </div>


            {error && <div className={styles.error}><span >{error}</span></div>}
        </form>
    )
};
export default reduxForm({form: 'EditProfile'})(EditProfile)
