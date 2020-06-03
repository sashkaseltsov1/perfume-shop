export const SET_ORDER = 'order/SET_ORDER';
export const SET_ERROR = 'order/SET_ERROR';
export const SET_INITIAL = 'order/SET_INITIAL';
const initialState = {
    order:undefined,
    error:undefined
};

const OrderReducer = (state=initialState, action)=>{
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