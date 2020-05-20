import {GET_PRODUCTS, SET_ERROR, SET_LOADER} from "../reducers/product-reducer";

export const getProductsActionCreator = (data)=>{
    return {
        type:GET_PRODUCTS,
        data:data
    }
};
export const setLoaderActionCreator = (state)=>{
    return {
        type:SET_LOADER,
        state:state
    }
};
export const setErrorActionCreator = ()=>{
    return {
        type:SET_ERROR
    }
};
