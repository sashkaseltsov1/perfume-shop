import {setCartActionCreator} from "../action-creators/cart-actions";
import {initialState} from "../reducers/cart-reducer";

export const setCartThunkCreator = () =>{
    let cart = (localStorage.cart && JSON.parse(localStorage.cart)) || {...initialState, products:[]};
    return (dispatch)=>{
        dispatch(setCartActionCreator(cart));
    }
};
export const appendProductThunkCreator = (product) =>{

    return (dispatch)=>{
        let cart = (localStorage.cart && JSON.parse(localStorage.cart)) || {...initialState, products:[]};
        let item = {
            _id:product._id,
            name:product.name,
            perfumeType:product.perfumeType,
            fullPrise:product.fullPrise,
            image:product.image,
            count:1
        };
        let index =cart.products.findIndex(item=>item._id===product._id);
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
};

export const removeProductThunkCreator = (product) =>{
    return (dispatch)=>{
        let cart = (localStorage.cart && JSON.parse(localStorage.cart)) || {...initialState, products:[]};
        let index = cart.products? cart.products.findIndex(item=>item._id===product._id):-1;
        if(index!==-1){
            if(cart.products[index].count>1){
                cart.products[index].count=cart.products[index].count-1;
            }else{
                cart.products.splice(index, 1);
            }
            cart.totalCount=cart.totalCount-1;
            cart.totalPrise = cart.totalPrise-product.fullPrise;
            localStorage.setItem('cart', JSON.stringify(cart));
            dispatch(setCartActionCreator(cart));
        }
    }
};