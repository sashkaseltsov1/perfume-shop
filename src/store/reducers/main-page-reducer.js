import initialImage from "../../images/loading-image.jpg";

export const SET_NOVELTY_PRODUCTS = 'main/SET_NOVELTY_PRODUCTS';
export const SET_DISCOUNT_PRODUCTS = 'main/SET_DISCOUNT_PRODUCTS';
const getInitialItems = ()=>{
    let items=[];
    for (let i=0;i<4;i++){
        items.push({
            isInitial:true,
            fullPrise:'',
            image:initialImage,
            isDiscount:false,
            isNovelty:false,
            name:'',
            perfumeType:{type:''},
            _id:i})}
    return items;
};
const initialState = {
    noveltyProducts:getInitialItems(),
    discountProducts:getInitialItems(),
};

const MainPageReducer = (state=initialState, action)=>{

    switch (action.type) {
        case SET_DISCOUNT_PRODUCTS:
            return {...state, discountProducts: action.products};
        case SET_NOVELTY_PRODUCTS:
            return {...state, noveltyProducts: action.products};
        default:
            return state;
    }
};



export default MainPageReducer;