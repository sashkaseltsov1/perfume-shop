import ordersApi from '../../api/orders-api';
import {setErrorActionCreator, setOrderActionCreator} from "../action-creators/order-actions";
import {authenticate} from "./auth-thunks";
import {SubmissionError} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";



export const getOrderThunkCreator = (id:string):ThunkAction<void, RootState, void, AnyAction>=>{
    return async (dispatch, getState) =>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            return ordersApi.getOrder(id).then((res)=>{
                dispatch(setOrderActionCreator(res.data.order));
            }).catch((err)=>{
                dispatch(setErrorActionCreator(err.message));
            })
        }
    }
};
export const addOrderThunkCreator = (deliveryType:string, paymentType:string, address:string):ThunkAction<void, RootState, void, AnyAction>=>{

    return async (dispatch, getState) =>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            let productIds:Array<string>=[];
            let products = getState().cart.products;
            products && products.forEach((product)=>{
                for (let i=0; i<product.count; i++) productIds.push(product._id);
            });
            return ordersApi.addOrder(productIds, address, deliveryType, paymentType)
                .catch((err)=>{throw new SubmissionError({_error:err.response.data.message})})
        }
    }
};
