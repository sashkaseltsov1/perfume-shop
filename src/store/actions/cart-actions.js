import {SET_CART} from "../reducers/cart-reducer";


export const setCartActionCreator = (cart)=>{
    return {
        type:SET_CART,
        cart:cart
    }
};