import instance from "../../api/products-api";
import {
    setDiscountProductsActionCreator,
    setNoveltyProductsActionCreator
} from "../action-creators/main-page-actions";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";

export const getNoveltyProductsThunkCreator = ():ThunkAction<void, RootState, void, AnyAction>=>{
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
export const getDiscountProductsThunkCreator = ():ThunkAction<void, RootState, void, AnyAction>=>{

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
