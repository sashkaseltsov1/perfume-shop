import {GET_PRODUCTS, SET_ERROR, SET_LOADER} from "../actions/product-actions";
import initialImage from '../../images/loading-image.jpg'
const getInitialItems = ()=>{
    let items=[];
    for (let i=0;i<12;i++){
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
    count:'',
    error:null,
    page:1,
    pageCount:1,
    products:getInitialItems(),

};

const ProductReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_ERROR:
            return {...initialState,products:[], error:'some error', isLoading: false};
        case SET_LOADER:
            return {...state, isLoading: action.state};
        case GET_PRODUCTS:
            return {...action.data, isLoading:false};
        default:
            return state;
    }
};



export default ProductReducer;