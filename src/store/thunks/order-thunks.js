import ordersApi from '../../api/orders-api';
import {setErrorActionCreator, setInitialActionCreator, setOrderActionCreator} from "../actions/order-actions";
import {authenticate} from "./auth-thunks";
import {SubmissionError} from "redux-form";
import {setCartThunkCreator} from "./cart-thunks";


export const getOrderThunkCreator = (id)=>{
    return async (dispatch, getState) =>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            return ordersApi.getOrder(id).then((res)=>{
                dispatch(setOrderActionCreator(res.data.order))
            }).catch((err)=>{
                dispatch(setErrorActionCreator(err.message));
            })
        }
    }
};
export const addOrderThunkCreator = (deliveryType, paymentType, address)=>{

    return async (dispatch, getState) =>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            let productIds=[];
            let products = getState().cart.products;
            products.forEach((product)=>{
                for (let i=0; i<product.count; i++) productIds.push(product._id);
            });
            return ordersApi.addOrder(productIds, address, deliveryType, paymentType)
                .catch((err)=>{throw new SubmissionError({_error:err.response.data.message})})
        }
    }
};
export const setInitialThunkCreator = ()=>{
    return (dispatch)=>{
        dispatch(setInitialActionCreator());
    }
};