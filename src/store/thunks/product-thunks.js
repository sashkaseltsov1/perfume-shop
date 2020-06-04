import productsApi from '../../api/products-api';
import {
    addCommentActionCreator,
    setErrorActionCreator,
    setInitialActionCreator,
    setProductActionCreator
} from "../actions/product-actions";



export const getProductThunkCreator = (id)=>{
    return (dispatch) =>{
        productsApi.getProduct(id).then((res)=>{
            dispatch(setProductActionCreator(res.data.product))
        }).catch((err)=>{
            dispatch(setErrorActionCreator(err.message));
        })
    }
};
export const setInitialThunkCreator = ()=>{
    return (dispatch)=>{
        dispatch(setInitialActionCreator());
    }
};
export const addCommentThunkCreator = (productId, message, stars)=>{
    return (dispatch, getState)=>{
        let username = getState().auth?.name;
        productsApi.addComment(productId, {
            message,
            stars,
            username
        }).then((res)=>{
            dispatch(addCommentActionCreator(res.data.comment))
        }).catch((err)=>{

        })
    }
};