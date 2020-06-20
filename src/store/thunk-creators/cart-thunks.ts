import {setCartActionCreator} from "../action-creators/cart-actions";
import {Cart, initialState} from "../reducers/cart-reducer";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";
import {ProductCartItem, ProductWithFullInfo} from "../types/product";

export const setCartThunkCreator = ():ThunkAction<void, RootState, void, AnyAction> =>{
    let cart = (localStorage.cart && JSON.parse(localStorage.cart)) || {...initialState, products:[]};
    return (dispatch)=>{
        dispatch(setCartActionCreator(cart));
    }
};

export const appendProductThunkCreator = (product:ProductWithFullInfo):ThunkAction<void, RootState, void, AnyAction> =>{
    return (dispatch)=>{
        let cart:Cart = (localStorage.cart && JSON.parse(localStorage.cart)) || {...initialState, products:[]};
        if(cart.products){
            let item:ProductCartItem = {
                _id:product._id,
                name:product.name,
                perfumeType:product.perfumeType,
                fullPrise:product.fullPrise,
                image:product.image,
                count:1
            };
            let index =cart.products.findIndex((item)=>item._id===product._id);
            if(index!==-1){
                cart.products[index].count=cart.products[index].count+1;
            }else{
                cart.products.push(item);
            }
            cart.totalCount=cart.totalCount+1;
            cart.totalPrise = cart.totalPrise+product.fullPrise;
            localStorage.setItem('cart', JSON.stringify(cart));
            dispatch(setCartActionCreator(cart));
        }
    }
};

export const removeProductThunkCreator = (product:ProductCartItem):ThunkAction<void, RootState, void, AnyAction> =>{
    return (dispatch)=>{
        let cart:Cart = (localStorage.cart && JSON.parse(localStorage.cart)) || {...initialState, products:[]};
        let index = cart.products? cart.products.findIndex(item=>item._id===product._id):-1;
        if(index!==-1){
            if(cart.products && cart.products[index].count>1){
                cart.products[index].count=cart.products[index].count-1;
            }else{
                cart.products?.splice(index, 1);
            }
            cart.totalCount=cart.totalCount-1;
            cart.totalPrise = cart.totalPrise-product.fullPrise;
            localStorage.setItem('cart', JSON.stringify(cart));
            dispatch(setCartActionCreator(cart));
        }
    }
};