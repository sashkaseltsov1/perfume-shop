import instance from "../../api/products-api";
import { createBrowserHistory } from "history";
import {
    getProductsActionCreator,
    setErrorActionCreator,
    setInitialProductsActionCreator,
    setLoaderActionCreator
} from "../action-creators/catalog-actions";

const normalizeQuery = (query)=>{
    let prm = query[0]==='?'? query:'?'+query;
    prm = prm[1]==='&'? '?'+prm.substr(2,prm.length-1):prm;
    return prm;
};

export const getProductsThunkCreator = (queries='', isPushNewQuery=true)=>{

    return (dispatch, getState)=>{
        let prm = normalizeQuery(queries);
        if(!getState().products.isLoading)
            dispatch(setLoaderActionCreator(true));
        instance.getProducts(prm)
            .then( (response)=> {
                window.scroll(0,0);
                isPushNewQuery&&queries && createBrowserHistory().push(prm);
                dispatch(getProductsActionCreator(response.data))
            })
            .catch( (error) =>{
                dispatch(setErrorActionCreator());
                console.log(error);
            })
    }
};

export const setInitialProductsThunkCreator = ()=>{
    return (dispatch) =>{
        dispatch(setInitialProductsActionCreator());
    }
};