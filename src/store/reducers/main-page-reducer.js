export const SET_NOVELTY_PRODUCTS = 'main/SET_NOVELTY_PRODUCTS';
export const SET_DISCOUNT_PRODUCTS = 'main/SET_DISCOUNT_PRODUCTS';
export const SET_INITIAL = 'main/SET_INITIAL';
const initialState = {
    noveltyProducts:undefined,
    discountProducts:undefined,
};

const MainPageReducer = (state=initialState, action)=>{

    switch (action.type) {
        case SET_INITIAL:
            return initialState;
        case SET_DISCOUNT_PRODUCTS:
            return {...state, discountProducts: action.products};
        case SET_NOVELTY_PRODUCTS:
            return {...state, noveltyProducts: action.products};
        default:
            return state;
    }
};



export default MainPageReducer;