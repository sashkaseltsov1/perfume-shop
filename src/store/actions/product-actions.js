import axios from "axios";
import { createBrowserHistory } from "history";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_LOADER = 'products/SET_LOADER';
const getProductsActionCreator = (data)=>{
    return {
        type:GET_PRODUCTS,
        data:data
    }
};
const setLoaderActionCreator = (state)=>{
    return {
        type:SET_LOADER,
        state:state
    }
};
const normalizeQuery = (query)=>{
    let prm = query[0]==='?'? query:'?'+query;
    prm = prm[1]==='&'? '?'+prm.substr(2,prm.length-1):prm;
    return prm;
};

export const getProductsThunkCreator = (queries='?&')=>{
    return (dispatch, getState)=>{
        let prm = normalizeQuery(queries);
        if(!getState().products.isLoading)
            dispatch(setLoaderActionCreator(true));
        axios.get('http://176.197.36.4:8000/products'+prm)
            .then(function (response) {
                createBrowserHistory().push(prm);
                window.scroll(0,0);
                dispatch(getProductsActionCreator(response.data))
            })
            .catch(function (error) {
                dispatch(setLoaderActionCreator(false));
                console.log(error);
            })
            .then(function () {

            });
    }
};