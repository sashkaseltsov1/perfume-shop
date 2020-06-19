import {OrderWithFullInfo} from "../types/order";
export const SET_ORDER = 'order/SET_ORDER';
export const SET_ERROR = 'order/SET_ERROR';
export const SET_INITIAL = 'order/SET_INITIAL';

export interface OrderAction{
    type: typeof SET_ORDER
    order:OrderWithFullInfo
}
export interface OrderErrorAction{
    type: typeof SET_ERROR
    error:string
}
export interface OrderInitialAction{
    type: typeof SET_INITIAL
}
interface OrderPage{
    order?:OrderWithFullInfo
    error?:string
}
type ActionTypes = OrderAction|OrderErrorAction|OrderInitialAction
const initialState:OrderPage = {
    order:undefined,
    error:undefined
};

const OrderReducer = (state=initialState, action:ActionTypes):OrderPage=>{
    switch (action.type) {
        case SET_INITIAL:
            return {};
        case SET_ERROR:
            return {...state, error:action.error};
        case SET_ORDER:
            return {...state, order:action.order};
        default:
            return state;
    }
};

export default OrderReducer;