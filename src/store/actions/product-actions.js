import {
    ADD_COMMENT,
    APPEND_COMMENTS, REMOVE_RESTORE_COMMENT,
    SET_INITIAL,
    SET_IS_FETCHING,
    SET_PRODUCT
} from "../reducers/product-reducer";


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
export const setIsFetchingActionCreator = (state)=>{
    return {
        type:SET_IS_FETCHING,
        state:state
    }
};
export const appendCommentsActionCreator = (comments)=>{
    return {
        type:APPEND_COMMENTS,
        comments:comments
    }
};
export const removeOrRestoreCommentActionCreator = (commentId, isRemoved)=>{
    return {
        type:REMOVE_RESTORE_COMMENT,
        commentId:commentId,
        isRemoved:isRemoved
    }
};
export const addCommentActionCreator = (comment)=>{
    return {
        type:ADD_COMMENT,
        comment:comment
    }
};

