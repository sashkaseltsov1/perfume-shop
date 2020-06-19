import {ProductCartItem} from "../types/product";
export const SET_CART = 'cart/SET_CART';

export type Cart = typeof initialState;
export interface CartAction {
    type:typeof SET_CART
    cart:Cart
}
export const initialState = {
    products:undefined as Array<ProductCartItem>|undefined,
    totalCount:0,
    totalPrise:0
};
const CartReducer = (state=initialState, action:CartAction):Cart=>{
    switch (action.type) {
        case SET_CART:
                return {...action.cart};
        default:
            return state;
    }
};

export default CartReducer;