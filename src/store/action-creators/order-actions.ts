import {
    OrderAction,
    OrderErrorAction,
    OrderInitialAction,
    SET_ERROR,
    SET_INITIAL,
    SET_ORDER
} from "../reducers/order-reducer";
import {OrderWithFullInfo} from "../types/order";

export const setOrderActionCreator = (order:OrderWithFullInfo):OrderAction=>{
    return {
        type:SET_ORDER,
        order:order
    }
};
export const setInitialActionCreator = ():OrderInitialAction=>{
    return {
        type:SET_INITIAL,
    }
};
export const setErrorActionCreator = (error:string):OrderErrorAction=>{
    return {
        type:SET_ERROR,
        error:error
    }
};
