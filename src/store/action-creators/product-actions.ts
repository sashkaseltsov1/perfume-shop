import {
    ADD_COMMENT,
    APPEND_COMMENTS,
    APPEND_FRAGRANCE,
    ProductAction,
    ProductAddCommentAction,
    ProductAppendCommentsAction,
    ProductAppendFragranceAction,
    ProductBrandAction,
    ProductErrorAction,
    ProductFetchingAction, ProductGenderAction, ProductImageAction,
    ProductInitialAction, ProductPerfumeTypeAction,
    ProductPrmAction,
    ProductRemoveCommentAction,
    ProductRemoveFragranceAction, ProductTemplateAction,
    REMOVE_FRAGRANCE,
    REMOVE_RESTORE_COMMENT,
    SET_AMOUNT,
    SET_BRAND,
    SET_COUNT,
    SET_DESCRIPTION,
    SET_DISCOUNT,
    SET_ERROR,
    SET_FULLPRISE,
    SET_GENDER,
    SET_IMAGE,
    SET_INITIAL,
    SET_IS_FETCHING,
    SET_NAME,
    SET_NOVELTY,
    SET_PRODUCT,
    SET_TEMPLATE,
    SET_TYPE
} from "../reducers/product-reducer";
import {Comment, ProductWithFullInfo} from "../types/product";
import {FilterOption} from "../types/filters";

export const setProductActionCreator = (product:ProductWithFullInfo):ProductAction=>{
    return {
        type:SET_PRODUCT,
        product:product
    }
};
export const setInitialActionCreator = ():ProductInitialAction=>{
    return {
        type:SET_INITIAL,
    }
};
export const setIsFetchingActionCreator = (state:boolean):ProductFetchingAction=>{
    return {
        type:SET_IS_FETCHING,
        state:state
    }
};
export const setErrorActionCreator = (error:string):ProductErrorAction=>{
    return {
        type:SET_ERROR,
        error:error
    }
};
export const appendCommentsActionCreator = (comments:Array<Comment>):ProductAppendCommentsAction=>{
    return {
        type:APPEND_COMMENTS,
        comments:comments
    }
};
export const removeOrRestoreCommentActionCreator = (commentId:string, isRemoved:boolean):ProductRemoveCommentAction=>{
    return {
        type:REMOVE_RESTORE_COMMENT,
        commentId:commentId,
        isRemoved:isRemoved
    }
};
export const addCommentActionCreator = (comment:Comment):ProductAddCommentAction=>{
    return {
        type:ADD_COMMENT,
        comment:comment
    }
};

export const setNameActionCreator = (prm:string):ProductPrmAction<typeof SET_NAME, string>=>{
    return {
        type:SET_NAME,
        prm:prm
    }
};
export const setCountActionCreator = (prm:number):ProductPrmAction<typeof SET_COUNT, number>=>{
    return {
        type:SET_COUNT,
        prm:prm
    }
};
export const setAmountActionCreator = (prm:number):ProductPrmAction<typeof SET_AMOUNT, number>=>{
    return {
        type:SET_AMOUNT,
        prm:prm
    }
};
export const setDescriptionActionCreator = (prm:string):ProductPrmAction<typeof SET_DESCRIPTION, string>=>{
    return {
        type:SET_DESCRIPTION,
        prm:prm
    }
};
export const setFullpriseActionCreator = (prm:number):ProductPrmAction<typeof SET_FULLPRISE, number>=>{
    return {
        type:SET_FULLPRISE,
        prm:prm
    }
};
export const setNoveltyActionCreator = (prm:boolean):ProductPrmAction<typeof SET_NOVELTY, boolean>=>{
    return {
        type:SET_NOVELTY,
        prm:prm
    }
};
export const setDiscountActionCreator = (prm:boolean):ProductPrmAction<typeof SET_DISCOUNT, boolean>=>{
    return {
        type:SET_DISCOUNT,
        prm:prm
    }
};
export const appendFragranceActionCreator = (fragrance:FilterOption):ProductAppendFragranceAction=>{
    return {
        type:APPEND_FRAGRANCE,
        fragrance:fragrance
    }
};
export const removeFragranceActionCreator = (id:string):ProductRemoveFragranceAction=>{
    return {
        type:REMOVE_FRAGRANCE,
        id:id
    }
};
export const setBrandActionCreator = (brand:FilterOption):ProductBrandAction=>{
    return {
        type:SET_BRAND,
        brand:brand
    }
};
export const setGenderActionCreator = (gender:FilterOption):ProductGenderAction=>{
    return {
        type:SET_GENDER,
        gender:gender
    }
};
export const setTypeActionCreator = (perfumeType:FilterOption):ProductPerfumeTypeAction=>{
    return {
        type:SET_TYPE,
        perfumeType:perfumeType
    }
};
export const setImageActionCreator = (image:string):ProductImageAction=>{
    return {
        type:SET_IMAGE,
        image:image
    }
};
export const setTemplateActionCreator = ():ProductTemplateAction=>{
    return {
        type:SET_TEMPLATE,
    }
};
