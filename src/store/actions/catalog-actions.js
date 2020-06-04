import {GET_PRODUCTS, SET_ERROR, SET_INITIAL_PRODUCTS, SET_LOADER} from "../reducers/catalog-reducer";

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
export const setInitialProductsActionCreator = ()=>{
    return {
        type:SET_INITIAL_PRODUCTS
    }
};
