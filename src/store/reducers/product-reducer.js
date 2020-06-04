export const SET_PRODUCT = 'product/SET_PRODUCT';
export const SET_ERROR = 'product/SET_ERROR';
export const SET_INITIAL = 'product/SET_INITIAL';
export const ADD_COMMENT = 'product/ADD_COMMENT';
const initialState = {
    product:undefined,
    error:undefined
};

const ProductReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_COMMENT:
            let comments = [...state.product.comments];
            comments.shift();
            comments.push(action.comment);
            return {...state, product: {...state.product, comments}};
        case SET_INITIAL:
            return {};
        case SET_ERROR:
            return {...state, error:action.error};
        case SET_PRODUCT:
            return {...state, product:action.product};
        default:
            return state;
    }
};

export default ProductReducer;