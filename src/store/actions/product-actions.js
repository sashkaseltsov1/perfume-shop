import {ADD_COMMENT, SET_ERROR, SET_INITIAL, SET_PRODUCT} from "../reducers/product-reducer";


export const setProductActionCreator = (product)=>{
    return {
        type:SET_PRODUCT,
        product:product
    }
};
export const setInitialActionCreator = ()=>{
    return {
        type:SET_INITIAL,
    }
};
export const addCommentActionCreator = (comment)=>{
    return {
        type:ADD_COMMENT,
        comment:comment
    }
};
export const setErrorActionCreator = (error)=>{
    return {
        type:SET_ERROR,
        error:error
    }
};
