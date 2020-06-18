import {OrderWithFullInfo} from "../types/order";
export const SET_ORDER = 'order/SET_ORDER';
export const SET_ERROR = 'order/SET_ERROR';
export const SET_INITIAL = 'order/SET_INITIAL';

interface OrderAction{
    type: typeof SET_ORDER
    order:OrderWithFullInfo
}
interface ErrorAction{
    type: typeof SET_ERROR
    error:string
}
interface InitialAction{
    type: typeof SET_INITIAL
}
interface OrderPage{
    order?:OrderWithFullInfo
    error?:string
}
type ActionTypes = OrderAction|ErrorAction|InitialAction
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