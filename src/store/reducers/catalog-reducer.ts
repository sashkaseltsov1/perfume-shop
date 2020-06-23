import initialImage from '../../images/loading-image.jpg'
import {ProductItem} from "../types/product";
export const GET_PRODUCTS = 'catalog/GET_PRODUCTS';
export const SET_LOADER = 'catalog/SET_LOADER';
export const SET_ERROR = 'catalog/SET_ERROR';
export const SET_INITIAL_PRODUCTS = 'catalog/SET_INITIAL';

export interface CatalogProductsAction{
    type: typeof GET_PRODUCTS
    data:Catalog
}
export interface CatalogLoaderAction{
    type: typeof SET_LOADER
    state:boolean
}
export interface CatalogErrorAction{
    type: typeof SET_ERROR
}
export interface CatalogInitialAction{
    type: typeof SET_INITIAL_PRODUCTS
}
interface InitialItem extends ProductItem{
    isInitial:boolean
}

const getInitialItems = ():Array<InitialItem>=>{
    let items=[];
    for (let i=0;i<24;i++){
        items.push({
            isInitial:true,
            fullPrise:0,
            image:initialImage,
            isDiscount:false,
            isNovelty:false,
            name:'',
            perfumeType:{type:'', _id:'pType'},
            _id:'prItem'+i })}
    return items;
};

const initialState = {
    isLoading:true,
    count:undefined as number|undefined,
    error:undefined as string|undefined,
    page:1,
    pageCount:1,
    products:getInitialItems(),
};

export type Catalog = typeof initialState;

type ActionTypes = CatalogProductsAction|CatalogLoaderAction|CatalogErrorAction|CatalogInitialAction

const CatalogReducer = (state=initialState, action:ActionTypes):Catalog=>{
    switch (action.type) {
        case SET_INITIAL_PRODUCTS:
            return initialState;
        case SET_ERROR:
            return {...initialState,products:[], error:'some error.ts', isLoading: false};
        case SET_LOADER:
            return {...state, isLoading: action.state};
        case GET_PRODUCTS:
            return {...action.data, isLoading:false};
        default:
            return state;
    }
};

export default CatalogReducer;