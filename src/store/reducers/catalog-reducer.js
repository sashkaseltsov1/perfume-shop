import initialImage from '../../images/loading-image.jpg'

export const GET_PRODUCTS = 'catalog/GET_PRODUCTS';
export const SET_LOADER = 'catalog/SET_LOADER';
export const SET_ERROR = 'catalog/SET_ERROR';
export const SET_INITIAL_PRODUCTS = 'catalog/SET_INITIAL';
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

const CatalogReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_INITIAL_PRODUCTS:
            return initialState;
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



export default CatalogReducer;