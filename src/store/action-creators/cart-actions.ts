import {Cart, CartAction, SET_CART} from "../reducers/cart-reducer";

export const setCartActionCreator = (cart:Cart):CartAction=>{
    return {
        type:SET_CART,
        cart:cart
    }
};