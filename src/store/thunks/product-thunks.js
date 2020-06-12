import productsApi from '../../api/products-api';
import {
    addCommentActionCreator, appendCommentsActionCreator, removeOrRestoreCommentActionCreator,
    setInitialActionCreator, setIsFetchingActionCreator,
    setProductActionCreator
} from "../actions/product-actions";
import {SubmissionError} from "redux-form";
import {authenticate} from "./auth-thunks";




export const getProductThunkCreator = (id)=>{
    return (dispatch) =>{
        productsApi.getProduct(id, 0).then((res)=>{
            dispatch(setProductActionCreator(res.data.product))
        }).catch((err)=>{
            console.log(err);
        })
    }
};

export const appendCommentsThunkCreator = (id)=>{
    return (dispatch, getState) =>{
        dispatch(setIsFetchingActionCreator(true));
        let count = getState().product.product?.comments.filter(item=>item.isRemoved===false).length||0;
        productsApi.getProduct(id, count).then((res)=>{
            dispatch(appendCommentsActionCreator(res.data.product.comments))
        }).catch((err)=>{
            console.log(err);
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
        return productsApi.addComment(productId, {
            message,
            stars,
            username
        }).then((res)=>{
            dispatch(addCommentActionCreator(res.data.comment))
        }).catch((err)=>{throw new SubmissionError({_error:err.response.data.message})})
    }
};
export const removeOrRestoreCommentThunkCreator = (productId, commentId, isRemoved)=>{
    return async (dispatch, getState) =>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            return productsApi.removeComment(productId,
                {commentId:commentId, isRemoved:isRemoved})
                .then((res)=>{
                dispatch(removeOrRestoreCommentActionCreator(res.data.commentId, res.data.isRemoved));
            }).catch((err)=>{
                alert(err.response.data.message)
            })
        }
    }
};