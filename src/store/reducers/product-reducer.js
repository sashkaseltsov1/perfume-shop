export const SET_PRODUCT = 'product/SET_PRODUCT';
export const SET_INITIAL = 'product/SET_INITIAL';
export const ADD_COMMENT = 'product/ADD_COMMENT';
export const APPEND_COMMENTS = 'product/APPEND_COMMENTS';
export const SET_IS_FETCHING = 'product/SET_IS_FETCHING';
export const REMOVE_RESTORE_COMMENT = 'product/REMOVE_RESTORE_COMMENT';
export const SET_ERROR = 'product/SET_ERROR';

export const SET_NAME = 'product/SET_NAME';
export const SET_DESCRIPTION = 'product/SET_DESCRIPTION';
export const SET_FULLPRISE = 'product/SET_FULLPRISE';
export const SET_AMOUNT = 'product/SET_AMOUNT';
export const SET_COUNT = 'product/SET_COUNT';
export const SET_NOVELTY = 'product/SET_NOVELTY';
export const SET_DISCOUNT = 'product/SET_DISCOUNT';
export const APPEND_FRAGRANCE = 'product/APPEND_FRAGRANCE';
export const REMOVE_FRAGRANCE = 'product/REMOVE_FRAGRANCE';
export const SET_BRAND = 'product/SET_BRAND';
export const SET_GENDER = 'product/SET_GENDER';
export const SET_TYPE = 'product/SET_TYPE';
export const SET_IMAGE = 'product/SET_IMAGE';
export const SET_TEMPLATE = 'product/SET_TEMPLATE';
const productTemplate = {
    product:{
        name:'',
        description:'',
        count:0,
        amount:0,
        fullPrise:0,
        isNovelty: false,
        isDiscount:false,
        fragrance:[],
        perfumeType:{},
        brand:{},
        gender:{},
        image:''
    },
    isFetching:false,
    error:undefined
};

const initialState = {
    product:undefined,
    isFetching:false,
    error:undefined
};

const ProductReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_IS_FETCHING:
            return {...state, isFetching:action.state};
        case REMOVE_RESTORE_COMMENT:
            return {...state, product:{...state.product,
                    comments:state.product.comments.map(item=>{
                        if(item._id===action.commentId){
                            return {...item, isRemoved:action.isRemoved}
                        }
                        return item;
                    })}};
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
        case SET_PRODUCT:
            return {...state, product:action.product};
        case SET_ERROR:
            return {...state, error:action.error};
        case SET_NAME:
            return {...state, product:{...state.product, name:action.prm}};
        case SET_COUNT:
            return {...state, product:{...state.product, count:action.prm}};
        case SET_DESCRIPTION:
            return {...state, product:{...state.product, description:action.prm}};
        case SET_FULLPRISE:
            return {...state, product:{...state.product, fullPrise:action.prm}};
        case SET_AMOUNT:
            return {...state, product:{...state.product, amount:action.prm}};
        case SET_NOVELTY:
            return {...state, product:{...state.product, isNovelty:action.prm}};
        case SET_DISCOUNT:
            return {...state, product:{...state.product, isDiscount:action.prm}};
        case APPEND_FRAGRANCE:
            return {...state, product:{...state.product, fragrance:[...state.product.fragrance, action.fragrance]}};
        case REMOVE_FRAGRANCE:
            let fragrances = state.product.fragrance.filter(fragrance=>fragrance._id!==action.id);
            return {...state, product:{...state.product, fragrance:fragrances}};
        case SET_BRAND:
            return {...state, product:{...state.product, brand:action.brand}};
        case SET_GENDER:
            return {...state, product:{...state.product, gender:action.gender}};
        case SET_TYPE:
            return {...state, product:{...state.product, perfumeType:action.perfumeType}};
        case SET_IMAGE:
            return {...state, product:{...state.product, image:action.image}};
        case SET_TEMPLATE:
            return {...productTemplate};
        default:
            return state;
    }
};

export default ProductReducer;