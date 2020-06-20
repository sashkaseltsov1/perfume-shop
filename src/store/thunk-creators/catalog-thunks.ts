import instance from "../../api/products-api";
import { createBrowserHistory } from "history";
import {
    getProductsActionCreator,
    setErrorActionCreator,
    setInitialProductsActionCreator,
    setLoaderActionCreator
} from "../action-creators/catalog-actions";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";

const normalizeQuery = (query:string):string=>{
    let prm = query[0]==='?'? query:'?'+query;
    prm = prm[1]==='&'? '?'+prm.substr(2,prm.length-1):prm;
    return prm;
};

export const getProductsThunkCreator = (queries='', isPushNewQuery=true):ThunkAction<void, RootState, void, AnyAction>=>{
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

export const setInitialProductsThunkCreator = ():ThunkAction<void, RootState, void, AnyAction>=>{
    return (dispatch) =>{
        dispatch(setInitialProductsActionCreator());
    }
};