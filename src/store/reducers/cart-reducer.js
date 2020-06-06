export const SET_CART = 'cart/SET_CART';
export const APPEND_PRODUCT = 'cart/APPEND_PRODUCT';

export const initialState = {
    products:undefined,
    totalCount:0,
    totalPrise:0
};

const CartReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_CART:
                return {...action.cart};
        default:
            return state;
    }
};

export default CartReducer;