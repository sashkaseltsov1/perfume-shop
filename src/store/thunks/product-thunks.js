import productsApi from '../../api/products-api';
import {
    addCommentActionCreator, appendCommentsActionCreator,
    setErrorActionCreator,
    setInitialActionCreator, setIsFetchingActionCreator,
    setProductActionCreator
} from "../actions/product-actions";
import {SubmissionError} from "redux-form";



export const getProductThunkCreator = (id)=>{
    return (dispatch) =>{
        productsApi.getProduct(id, 0).then((res)=>{
            dispatch(setProductActionCreator(res.data.product))
        }).catch((err)=>{
            dispatch(setErrorActionCreator(err.message));
        })
    }
};

export const appendCommentsThunkCreator = (id)=>{
    return (dispatch, getState) =>{
        dispatch(setIsFetchingActionCreator(true));
        let count = getState().product.product?.comments.length||0;
        productsApi.getProduct(id, count).then((res)=>{
            dispatch(appendCommentsActionCreator(res.data.product.comments))
        }).catch((err)=>{
            dispatch(setErrorActionCreator(err.message));
        }).then(()=>dispatch(setIsFetchingActionCreator(false)))
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
        console.log(username)
        return productsApi.addComment(productId, {
            message,
            stars,
            username
        }).then((res)=>{
            dispatch(addCommentActionCreator(res.data.comment))
        }).catch((err)=>{throw new SubmissionError({_error:err.response.data.message})})
    }
};