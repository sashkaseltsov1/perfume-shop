import {
    APPEND_PRODUCT,
    AppendProductCartAction,
    Cart,
    CartAction,
    INIT_CART,
    InitCartAction,
    REMOVE_PRODUCT,
    RemoveProductCartAction,
    SET_CART
} from "../reducers/cart-reducer";
import {ProductCartItem, ProductWithFullInfo} from "../types/product";

export const setCartActionCreator = (cart:Cart):CartAction=>{
    return {
        type:SET_CART,
        cart:cart
    }
};
export const appendProductCartActionCreator = (product:ProductWithFullInfo):AppendProductCartAction=>{
    return {
        type:APPEND_PRODUCT,
        product:product
    }
};
export const removeProductCartActionCreator = (product:ProductCartItem):RemoveProductCartAction=>{
    return {
        type:REMOVE_PRODUCT,
        product:product
    }
};
export const initCartActionCreator = ():InitCartAction=>{
    return {
        type:INIT_CART,
    }
};