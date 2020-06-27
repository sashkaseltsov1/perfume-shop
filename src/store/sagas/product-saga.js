import {call, put, all, takeLatest, select} from "redux-saga/effects";
import productsApi from "../../api/products-api";
import {
    addCommentActionCreator,
    appendCommentsActionCreator, removeOrRestoreCommentActionCreator,
    setErrorActionCreator,
    setIsFetchingActionCreator,
    setProductActionCreator
} from "../action-creators/product-actions";
import {
    CHANGE_COMMENT_STATE,
    CREATE_PRODUCT,
    FETCH_NEXT_COMMENTS,
    FETCH_PRODUCT, REMOVE_PRODUCT,
    UPDATE_PRODUCT
} from "../reducers/product-reducer";

import {
    ADD_COMMENT_FORM_FAILURE,
    ADD_COMMENT_FORM_SUBMIT,
    ADD_COMMENT_FORM_SUCCESS
} from "../redux-form-actions/add-comment";



export function* fetchProduct({id}) {
    try {
        let response = yield call(productsApi.getProduct, id);
        yield put(setProductActionCreator(response.data.product));
    }catch (e) {
        yield put(setErrorActionCreator(e))
    }
}
export function* fetchNextComments({id}) {
    yield put(setIsFetchingActionCreator(true));
    let state = yield select();
    let count = state.product.product?.comments.filter(item=>item.isRemoved===false).length||0;
    try {
        let response = yield call(productsApi.getProduct, id, count);
        yield put(appendCommentsActionCreator(response.data.product.comments));
    }catch (e) {}
    yield put(setIsFetchingActionCreator(false));
}
export function* sendNewComment({payload}) {
    let state = yield select();
    let username = state.auth?.name;
    let productId = state.product.product._id;

    try {
        let response = yield call(productsApi.addComment, productId, {
            message:payload.message,
            stars:payload.stars,
            username
        });
        yield put({type:ADD_COMMENT_FORM_SUCCESS});
        yield put(addCommentActionCreator(response.data.comment));
    }catch (e) {
        yield put({type: ADD_COMMENT_FORM_FAILURE, payload: {_error:e.response.data.message}})
    }
}
export function* changeCommentState({productId, commentId, isRemoved}) {
    try {
        let response = yield call(productsApi.removeComment, productId, {commentId:commentId, isRemoved:isRemoved});
        yield put(removeOrRestoreCommentActionCreator(response.data.commentId, response.data.isRemoved));
    }catch (e) {
        alert(e.response.data.message)
    }
}
const getFormData = (product, file)=>{
    let bodyFormData = new FormData();
    bodyFormData.set('name',product.name);
    bodyFormData.set('description',product.description);
    bodyFormData.set('amount',product.amount);
    bodyFormData.set('count',product.count);
    bodyFormData.set('isDiscount',product.isDiscount);
    bodyFormData.set('isNovelty',product.isNovelty);
    bodyFormData.set('fullPrise',product.fullPrise);
    bodyFormData.set('perfumeType',product.perfumeType._id);
    bodyFormData.set('brand',product.brand._id);
    bodyFormData.set('gender',product.gender._id);
    product.fragrance.forEach((fr, index)=>{
        bodyFormData.set(`fragrance[${index}]`,fr._id);
    });
    bodyFormData.append('image', file);
    return bodyFormData;
};
export function* createProduct({file}) {
    let state = yield select();
    let product = state.product.product;
    let bodyFormData = getFormData(product, file);
    yield put(setIsFetchingActionCreator(true));
    try {
        yield call(productsApi.createProduct, bodyFormData);
        alert('Продукт успешно добавлен!')
    }catch (e) {
        alert(e.response.data.message);
    }
    yield put(setIsFetchingActionCreator(false));
}
export function* updateProduct({file}) {
    let state = yield select();
    let product = state.product.product;
    let bodyFormData = getFormData(product, file);
    yield put(setIsFetchingActionCreator(true));
    try {
        yield call(productsApi.updateProduct, bodyFormData, product._id);
        alert('Продукт успешно обновлен!')
    }catch (e) {
        alert(e.response.data.message);
    }
    yield put(setIsFetchingActionCreator(false));
}
export function* removeProduct({id}) {
    try {
        yield call(productsApi.removeProduct, id);
        yield put(setErrorActionCreator('page not found'));
        alert('Продукт успешно удалён!');
    }catch (e) {
        alert(e.response.data.message);
    }
}

export function* watchFetchProductSaga() {
    yield takeLatest(FETCH_PRODUCT, fetchProduct);
}
export function* watchFetchNextCommentsSaga() {
    yield takeLatest(FETCH_NEXT_COMMENTS, fetchNextComments);
}
export function* watchSendNewCommentSaga() {
    yield takeLatest(ADD_COMMENT_FORM_SUBMIT, sendNewComment);
}
export function* watchChangeCommentStateSaga() {
    yield takeLatest(CHANGE_COMMENT_STATE, changeCommentState);
}
export function* watchCreateProductSaga() {
    yield takeLatest(CREATE_PRODUCT, createProduct);
}
export function* watchUpdateProductSaga() {
    yield takeLatest(UPDATE_PRODUCT, updateProduct);
}
export function* watchRemoveProductSaga() {
    yield takeLatest(REMOVE_PRODUCT, removeProduct);
}
export default function* productSaga() {
    yield all([
        watchFetchProductSaga(),
        watchFetchNextCommentsSaga(),
        watchSendNewCommentSaga(),
        watchChangeCommentStateSaga(),
        watchCreateProductSaga(),
        watchUpdateProductSaga(),
        watchRemoveProductSaga()
    ])
}