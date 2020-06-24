import { put, takeEvery, call, all } from 'redux-saga/effects';
import instance from "../../api/products-api";
import {setDiscountProductsActionCreator, setNoveltyProductsActionCreator} from "../action-creators/main-page-actions";
import {FETCH_PRODUCTS_FOR_SLIDERS} from "../reducers/main-page-reducer";

export function* fetchProductsForSlider() {
    try {
        let [noveltyProductsRes, discountProductsRes] = yield all([
            call(instance.getProducts, '?isNovelty=true&portion=9'),
            call(instance.getProducts, '?isDiscount=true&portion=9')
        ]);
        yield put(setNoveltyProductsActionCreator(noveltyProductsRes.data.products));
        yield put(setDiscountProductsActionCreator(discountProductsRes.data.products))
    }catch (e) {
        console.log(e);
    }
}

export default function* watchMainPageSaga() {
    yield takeEvery(FETCH_PRODUCTS_FOR_SLIDERS, fetchProductsForSlider);
}



