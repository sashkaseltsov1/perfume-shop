import {
    ADD_COMMENT,
    APPEND_COMMENTS, APPEND_FRAGRANCE, REMOVE_FRAGRANCE,
    REMOVE_RESTORE_COMMENT,
    SET_AMOUNT, SET_BRAND,
    SET_COUNT,
    SET_DESCRIPTION,
    SET_DISCOUNT,
    SET_ERROR,
    SET_FULLPRISE, SET_GENDER, SET_IMAGE,
    SET_INITIAL,
    SET_IS_FETCHING,
    SET_NAME,
    SET_NOVELTY,
    SET_PRODUCT, SET_TEMPLATE, SET_TYPE
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
export const setErrorActionCreator = (error)=>{
    return {
        type:SET_ERROR,
        error:error
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

export const setNameActionCreator = (prm)=>{
    return {
        type:SET_NAME,
        prm:prm
    }
};
export const setCountActionCreator = (prm)=>{
    return {
        type:SET_COUNT,
        prm:prm
    }
};
export const setAmountActionCreator = (prm)=>{
    return {
        type:SET_AMOUNT,
        prm:prm
    }
};
export const setDescriptionActionCreator = (prm)=>{
    return {
        type:SET_DESCRIPTION,
        prm:prm
    }
};
export const setFullpriseActionCreator = (prm)=>{
    return {
        type:SET_FULLPRISE,
        prm:prm
    }
};
export const setNoveltyActionCreator = (prm)=>{
    return {
        type:SET_NOVELTY,
        prm:prm
    }
};
export const setDiscountActionCreator = (prm)=>{
    return {
        type:SET_DISCOUNT,
        prm:prm
    }
};
export const appendFragranceActionCreator = (fragrance)=>{
    return {
        type:APPEND_FRAGRANCE,
        fragrance:fragrance
    }
};
export const removeFragranceActionCreator = (id)=>{
    return {
        type:REMOVE_FRAGRANCE,
        id:id
    }
};
export const setBrandActionCreator = (brand)=>{
    return {
        type:SET_BRAND,
        brand:brand
    }
};
export const setGenderActionCreator = (gender)=>{
    return {
        type:SET_GENDER,
        gender:gender
    }
};
export const setTypeActionCreator = (perfumeType)=>{
    return {
        type:SET_TYPE,
        perfumeType:perfumeType
    }
};
export const setImageActionCreator = (image)=>{
    return {
        type:SET_IMAGE,
        image:image
    }
};
export const setTemplateActionCreator = ()=>{
    return {
        type:SET_TEMPLATE,
    }
};
