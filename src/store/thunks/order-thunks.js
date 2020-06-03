import ordersApi from '../../api/orders-api';
import {setErrorActionCreator, setInitialActionCreator, setOrderActionCreator} from "../actions/order-actions";
import {authenticate} from "./auth-thunks";


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
export const setInitialThunkCreator = ()=>{
    return (dispatch)=>{
        dispatch(setInitialActionCreator());
    }
};