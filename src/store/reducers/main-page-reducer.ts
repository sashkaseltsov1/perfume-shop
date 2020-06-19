import {ProductItem} from "../types/product";

export const SET_NOVELTY_PRODUCTS = 'main/SET_NOVELTY_PRODUCTS';
export const SET_DISCOUNT_PRODUCTS = 'main/SET_DISCOUNT_PRODUCTS';
export const SET_INITIAL = 'main/SET_INITIAL';
export interface MainPageNoveltyAction{
    type:typeof SET_NOVELTY_PRODUCTS
    products:Array<ProductItem>
}
export interface MainPageDiscountAction{
    type:typeof SET_DISCOUNT_PRODUCTS
    products:Array<ProductItem>
}
export interface MainPageInitialAction{
    type:typeof SET_INITIAL
}
interface MainPage {
    noveltyProducts?:Array<ProductItem>
    discountProducts?:Array<ProductItem>
}

type ActionTypes = MainPageNoveltyAction|MainPageDiscountAction|MainPageInitialAction

const initialState:MainPage = {
    noveltyProducts:undefined,
    discountProducts:undefined,
};

const MainPageReducer = (state=initialState, action:ActionTypes):MainPage=>{

    switch (action.type) {
        case SET_INITIAL:
            return initialState;
        case SET_DISCOUNT_PRODUCTS:
            return {...state, discountProducts: action.products};
        case SET_NOVELTY_PRODUCTS:
            return {...state, noveltyProducts: action.products};
        default:
            return state;
    }
};

export default MainPageReducer