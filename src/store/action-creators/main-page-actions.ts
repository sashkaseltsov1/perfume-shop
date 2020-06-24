import {
    FETCH_PRODUCTS_FOR_SLIDERS,
    fetchProductsForSlidersAction,
    MainPageDiscountAction,
    MainPageInitialAction,
    MainPageNoveltyAction,
    SET_DISCOUNT_PRODUCTS,
    SET_INITIAL,
    SET_NOVELTY_PRODUCTS
} from "../reducers/main-page-reducer";
import {ProductItem} from "../types/product";

export const setNoveltyProductsActionCreator = (products:Array<ProductItem>):MainPageNoveltyAction=>{
    return {
        type:SET_NOVELTY_PRODUCTS,
        products:products
    }
};
export const fetchProductsForSlidersActionCreator = ():fetchProductsForSlidersAction=>{
    return {
        type:FETCH_PRODUCTS_FOR_SLIDERS,
    }
};

export const setDiscountProductsActionCreator = (products:Array<ProductItem>):MainPageDiscountAction=>{
    return {
        type:SET_DISCOUNT_PRODUCTS,
        products:products
    }
};
export const setInitialActionCreator = ():MainPageInitialAction=>{
    return {
        type:SET_INITIAL,
    }
};