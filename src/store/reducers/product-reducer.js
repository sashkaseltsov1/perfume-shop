export const SET_PRODUCT = 'product/SET_PRODUCT';
export const SET_ERROR = 'product/SET_ERROR';
export const SET_INITIAL = 'product/SET_INITIAL';
export const ADD_COMMENT = 'product/ADD_COMMENT';
export const APPEND_COMMENTS = 'product/APPEND_COMMENTS';
export const SET_IS_FETCHING = 'product/SET_IS_FETCHING';

const initialState = {
    product:undefined,
    error:undefined,
    isFetching:false
};

const ProductReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_IS_FETCHING:
            return {...state, isFetching:action.state};
        case APPEND_COMMENTS:
            let nextComments = [...state.product.comments, ...action.comments];
            return {...state, product: {...state.product,
                    comments:nextComments}};
        case ADD_COMMENT:
            let comments = [...state.product.comments];
            comments.unshift(action.comment);
            return {...state, product: {...state.product,
                    comments,
                    commentsCount:state.product.commentsCount+1}};
        case SET_INITIAL:
            return {...initialState};
        case SET_ERROR:
            return {...state, error:action.error};
        case SET_PRODUCT:
            return {...state, product:action.product};
        default:
            return state;
    }
};

export default ProductReducer;