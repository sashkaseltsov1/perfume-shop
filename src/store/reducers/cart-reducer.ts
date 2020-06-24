import {ProductCartItem, ProductWithFullInfo} from "../types/product";
export const SET_CART = 'cart/SET_CART';
export const INIT_CART = 'cart/INIT_CART';
export const APPEND_PRODUCT = 'cart/APPEND_PRODUCT';
export const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';

export type Cart = typeof initialState;
export interface InitCartAction {
    type:typeof INIT_CART
}
export interface AppendProductCartAction {
    type:typeof APPEND_PRODUCT
    product:ProductWithFullInfo
}
export interface RemoveProductCartAction {
    type:typeof REMOVE_PRODUCT
    product:ProductCartItem
}
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