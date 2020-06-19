import {
    Catalog, CatalogErrorAction, CatalogInitialAction, CatalogLoaderAction,
    CatalogProductsAction,
    GET_PRODUCTS,
    SET_ERROR,
    SET_INITIAL_PRODUCTS,
    SET_LOADER
} from "../reducers/catalog-reducer";

export const getProductsActionCreator = (data:Catalog):CatalogProductsAction=>{
    return {
        type:GET_PRODUCTS,
        data:data
    }
};
export const setLoaderActionCreator = (state:boolean):CatalogLoaderAction=>{
    return {
        type:SET_LOADER,
        state:state
    }
};
export const setErrorActionCreator = ():CatalogErrorAction=>{
    return {
        type:SET_ERROR
    }
};
export const setInitialProductsActionCreator = ():CatalogInitialAction=>{
    return {
        type:SET_INITIAL_PRODUCTS
    }
};
