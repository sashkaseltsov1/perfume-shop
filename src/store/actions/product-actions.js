import axios from "axios";
import { createBrowserHistory } from "history";

export const GET_PRODUCTS = 'products/GET_PRODUCTS';
export const SET_LOADER = 'products/SET_LOADER';
export const SET_ERROR = 'products/SET_ERROR';
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
const setErrorActionCreator = ()=>{
    return {
        type:SET_ERROR
    }
};
const normalizeQuery = (query)=>{
    let prm = query[0]==='?'? query:'?'+query;
    prm = prm[1]==='&'? '?'+prm.substr(2,prm.length-1):prm;
    return prm;
};

export const getProductsThunkCreator = (queries='', isHistoryListenerEvent=false)=>{
    return (dispatch, getState)=>{
        let prm = normalizeQuery(queries);
        if(!getState().products.isLoading)
            dispatch(setLoaderActionCreator(true));
        axios.get('http://176.197.36.4:8000/products'+prm)
            .then( (response)=> {
                window.scroll(0,0);
                !isHistoryListenerEvent&&queries && createBrowserHistory().push(prm);
                dispatch(getProductsActionCreator(response.data))
            })
            .catch( (error) =>{
                console.log('aaa')
                dispatch(setErrorActionCreator());
                console.log(error);
            })

    }
};