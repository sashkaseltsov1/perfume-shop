import {SET_DISCOUNT_PRODUCTS, SET_INITIAL, SET_NOVELTY_PRODUCTS} from "../reducers/main-page-reducer";



export const setNoveltyProductsActionCreator = (products)=>{
    return {
        type:SET_NOVELTY_PRODUCTS,
        products:products
    }
};
export const setDiscountProductsActionCreator = (products)=>{
    return {
        type:SET_DISCOUNT_PRODUCTS,
        products:products
    }
};
export const setInitialActionCreator = ()=>{
    return {
        type:SET_INITIAL,
    }
};