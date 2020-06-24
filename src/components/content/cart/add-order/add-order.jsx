import React, {useEffect} from "react";
import styles from './add-order.module.css';
import {reduxForm} from "redux-form";
import cn from 'classnames';
import {connect} from "react-redux";
import cdek from '../../../../images/delivery/cdek.jpg';
import russiaPost from '../../../../images/delivery/russia-post.jpg';
import dpd from '../../../../images/delivery/dpd.jpg';
import ems from '../../../../images/delivery/ems.jpg';
import pay from '../../../../images/payment/pay.jpg';
import RadioInput from "../../../templates/input/radio-input";
import TextWithLine from "../../../templates/text-with-line/text-with-line";
import {NavLink} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import Button from "../../../templates/button/button";
import {fetchUserDataActionCreator} from "../../../../store/action-creators/user-actions";
import {onSubmitActions} from "redux-form-submit-saga";
import {ADD_ORDER_FORM} from "../../../../store/redux-form-actions/add-order";

const AddOrder = ({handleSubmit, dispatch, submitting, error, address, isAuth, submitSucceeded, ...props})=>{
    const history = useHistory();
    useEffect(()=>{
        props.fetchUserDataActionCreator();
        //eslint-disable-next-line
    },[]);
    useEffect(()=>{
        if(submitSucceeded) {
            localStorage.removeItem('cart');
            props.initCartActionCreator();
            history.push('/shop/success');
        }
        //eslint-disable-next-line
    },[submitSucceeded]);
    return(
        <div>
            <TextWithLine name={'Оформить заказ'}/>
            {isAuth === true && <form
                onSubmit={handleSubmit}
                className={styles.form}>
                <div className={styles.text}>Адрес доставки:</div>
                <span className={cn(styles.text, styles.address)}>
                    {address || <span style={{color: '#c12020'}}>Не определён</span>}
                </span>
                <div className={styles.help}>Адрес доставки можно изменить в вашем профиле!</div>
                <div>
                    <div className={styles.text}>Выберите способ доставки:</div>
                    <div className={styles.deliveryType}>
                        <RadioInput image={cdek} value={'CDEK'} name={'deliveryType'}/>
                        <RadioInput image={russiaPost} value={'Почта России'} name={'deliveryType'}/>
                        <RadioInput image={ems} value={'EMS'} name={'deliveryType'}/>
                        <RadioInput image={dpd} value={'DPD'} name={'deliveryType'}/>
                    </div>
                </div>
                <div>
                    <div className={styles.text}>Выберите способ оплаты:</div>
                    <div className={styles.deliveryType}>
                        <RadioInput image={pay} value={'Наложенный платёж'} name={'paymentType'}/>
                    </div>
                </div>
                <div className={styles.button}>
                    <Button title={'Оформить заказ'} disabled={submitting} type={'submit'}/>
                </div>
                {error && <div className={styles.error}><span>{error}</span></div>}
            </form>}
            {isAuth === false && <div style={{'textAlign': 'center'}}>
                <span>Для оформления заказа необходима <NavLink to={'../auth'}>авторизация</NavLink></span>
            </div>}
        </div>
    )
};

export default connect(state=>({address:state.profile.user?.address, isAuth:state.auth?.isAuthorized}),
    {fetchUserDataActionCreator})
(reduxForm({form: 'AddOrder', onSubmit: onSubmitActions(ADD_ORDER_FORM)})(AddOrder));