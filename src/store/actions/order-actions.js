import {SET_ERROR, SET_INITIAL, SET_ORDER} from "../reducers/order-reducer";


export const setOrderActionCreator = (order)=>{
    return {
        type:SET_ORDER,
        order:order
    }
};
export const setInitialActionCreator = ()=>{
    return {
        type:SET_INITIAL,
    }
};
export const setErrorActionCreator = (error)=>{
    return {
        type:SET_ERROR,
        error:error
    }
};
