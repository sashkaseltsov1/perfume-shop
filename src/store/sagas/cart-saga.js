import {takeEvery, all, put} from 'redux-saga/effects';
import {APPEND_PRODUCT, INIT_CART, REMOVE_PRODUCT} from "../reducers/cart-reducer";
import {setCartActionCreator} from "../action-creators/cart-actions";
import {initialState} from "../reducers/cart-reducer";

export function* initCart() {
    let cart = (localStorage.cart && JSON.parse(localStorage.cart)) || {...initialState, products:[]};
    yield put(setCartActionCreator(cart));
}
export function* appendCartProduct({product}) {
    let cart = (localStorage.cart && JSON.parse(localStorage.cart)) || {...initialState, products:[]};
    if(cart.products){
        let item = {
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
        yield put(setCartActionCreator(cart));
    }
}
export function* removeCartProduct({product}) {
    let cart = (localStorage.cart && JSON.parse(localStorage.cart)) || {...initialState, products:[]};
    let index = cart.products? cart.products.findIndex(item=>item._id===product._id):-1;
    if(index!==-1) {
        if (cart.products && cart.products[index].count > 1) {
            cart.products[index].count = cart.products[index].count - 1;
        } else {
            cart.products &&cart.products.splice(index, 1);
        }
        cart.totalCount = cart.totalCount - 1;
        cart.totalPrise = cart.totalPrise - product.fullPrise;
        localStorage.setItem('cart', JSON.stringify(cart));
        yield put(setCartActionCreator(cart));
    }

}
export function* watchInitCart() {
    yield takeEvery(INIT_CART, initCart);
}
export function* watchAppendProduct() {
    yield takeEvery(APPEND_PRODUCT, appendCartProduct)
}
export function* watchRemoveProduct() {
    yield takeEvery(REMOVE_PRODUCT, removeCartProduct)
}
export default function* cartSaga() {
    yield all([
        watchInitCart(),
        watchAppendProduct(),
        watchRemoveProduct()
    ])
}
/*
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
};*/