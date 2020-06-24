import {call, put, takeLatest} from "redux-saga/effects";
import {FETCH_PRODUCTS} from "../reducers/catalog-reducer";
import {
    setErrorActionCreator,
    setLoaderActionCreator,
    setProductsActionCreator
} from "../action-creators/catalog-actions";
import instance from "../../api/products-api";
import {createBrowserHistory} from "history";

const normalizeQuery = (query)=>{
    let prm = query[0]==='?'? query:'?'+query;
    prm = prm[1]==='&'? '?'+prm.substr(2,prm.length-1):prm;
    return prm;
};
export function* fetchProducts({queries, isPushNewQuery}) {
    let prm = normalizeQuery(queries);
    yield put(setLoaderActionCreator(true));
    try {
        let response = yield call(instance.getProducts, prm);
        window.scroll(0,0);
        isPushNewQuery&&queries && createBrowserHistory().push(prm);
        yield put(setProductsActionCreator(response.data));
    }catch (e) {
        yield put(setErrorActionCreator())
    }
}

export default function* watchFetchProductsSaga() {
    yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}
