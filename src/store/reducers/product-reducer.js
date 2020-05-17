import {GET_PRODUCTS, SET_LOADER} from "../actions/product-actions";
import initialImage from '../../images/loading-image.jpg'
const getInitialItems = ()=>{
    let items=[];
    for (let i=0;i<24;i++){
        items.push({
            isInitial:true,
            fullPrise:'',
            image:initialImage,
            isDiscount:false,
            isNovelty:false,
            name:'',
            perfumeType:{type:''},
            _id:i })}
    return items;
};
const initialState = {
    isLoading:true,
    count:24,
    error:null,
    page:1,
    pageCount:1,
    products:getInitialItems(),

};

const ProductReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_LOADER:
            return {...state, isLoading: true};
        case GET_PRODUCTS:
            return {...action.data, isLoading:false};
        default:
            return state;
    }
};



export default ProductReducer;