import {
    Catalog,
    CatalogErrorAction,
    CatalogInitialAction,
    CatalogLoaderAction,
    CatalogProductsAction,
    FETCH_PRODUCTS,
    FetchProductsAction,
    SET_ERROR,
    SET_INITIAL_PRODUCTS,
    SET_LOADER,
    SET_PRODUCTS
} from "../reducers/catalog-reducer";

export const fetchProductsActionCreator = (queries='', isPushNewQuery=true):FetchProductsAction=>{
    return {
        type:FETCH_PRODUCTS,
        queries:queries,
        isPushNewQuery:isPushNewQuery
    }
};
export const setProductsActionCreator = (data:Catalog):CatalogProductsAction=>{
    return {
        type:SET_PRODUCTS,
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
