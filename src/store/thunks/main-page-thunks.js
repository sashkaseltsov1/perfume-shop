import instance from "../../api/products-api";
import {
    setDiscountProductsActionCreator, setInitialActionCreator,
    setNoveltyProductsActionCreator
} from "../actions/main-page-actions";



export const getNoveltyProductsThunkCreator = ()=>{
    return (dispatch)=>{
        instance.getProducts('?isNovelty=true&portion=9')
            .then( (response)=> {
                dispatch(setNoveltyProductsActionCreator(response.data.products));
            })
            .catch( (error) =>{
                console.log(error);
            })
    }
};
export const getDiscountProductsThunkCreator = ()=>{

    return (dispatch)=>{
        instance.getProducts('?isDiscount=true&portion=9')
            .then( (response)=> {
                dispatch(setDiscountProductsActionCreator(response.data.products));
            })
            .catch( (error) =>{
                console.log(error);
            })
    }
};
export const setInitialThunkCreator = ()=>{
    return (dispatch)=>{
        dispatch(setInitialActionCreator());
    }
};