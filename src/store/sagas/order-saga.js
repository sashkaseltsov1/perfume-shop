import {call, put, all, takeLatest, takeEvery, select} from "redux-saga/effects";

import {FETCH_ORDER} from "../reducers/order-reducer";
import ordersApi from "../../api/orders-api";
import {setErrorActionCreator, setOrderActionCreator} from "../action-creators/order-actions";
import {ADD_ORDER_FORM_FAILURE, ADD_ORDER_FORM_SUBMIT, ADD_ORDER_FORM_SUCCESS} from "../redux-form-actions/add-order";



export function* fetchOrder({id}) {
    try {
        let response = yield call(ordersApi.getOrder, id);
        yield put(setOrderActionCreator(response.data.order));
    }catch (e) {
        yield put(setErrorActionCreator(e.message));
    }
}
export function* addOrder({payload}) {
    let state = yield select();
    let productIds=[];
    let products = state.cart.products;
    products && products.forEach((product)=>{
        for (let i=0; i<product.count; i++) productIds.push(product._id);
    });
    try {
        yield call(ordersApi.addOrder, productIds, state.profile.user?.address, payload.deliveryType, payload.paymentType);
        yield put({type:ADD_ORDER_FORM_SUCCESS});
    }catch (e) {
        yield put({type: ADD_ORDER_FORM_FAILURE, payload: {_error:e.response.data.message}})
    }
}

export function* watchFetchOrderSaga() {
    yield takeEvery(FETCH_ORDER, fetchOrder);
}
export function* watchAddOrderSaga() {
    yield takeLatest(ADD_ORDER_FORM_SUBMIT, addOrder);
}
export default function* orderSaga() {
    yield all([
        watchFetchOrderSaga(),
        watchAddOrderSaga()
    ])
}
