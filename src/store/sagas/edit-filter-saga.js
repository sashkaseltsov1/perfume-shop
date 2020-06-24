import {call, put, all, takeLatest} from "redux-saga/effects";
import instance from "../../api/filters-api";
import {setErrorActionCreator, setFilterActionCreator} from "../action-creators/edit-filter-actions";
import {ADD_FILTER, FETCH_SINGLE_FILTER, REMOVE_FILTER} from "../reducers/edit-filter-reducer";

export function* fetchSingleFilter({category}) {
    try {
        let response = yield call(instance.getFilter, category);
        yield put(setFilterActionCreator(response.data));
    }catch (e) {
        yield put(setErrorActionCreator(e));
    }
}
export function* addNewFilterFilter({category, optionType}) {
    try {
        let response = yield call(instance.addFilter, category, optionType);
        yield put(setFilterActionCreator(response.data));
    }catch (e) {
        alert(e);
    }
}
export function* removeFilterFilter({category, optionId}) {
    try {
        let response = yield call(instance.removeFilter, category, optionId);
        yield put(setFilterActionCreator(response.data));
    }catch (e) {
        alert(e);
    }
}

export function* watchRemoveFilterSaga() {
    yield takeLatest(REMOVE_FILTER, removeFilterFilter);
}
export function* watchAddNewFilterSaga() {
    yield takeLatest(ADD_FILTER, addNewFilterFilter);
}
export function* watchFetchSingleFilterSaga() {
    yield takeLatest(FETCH_SINGLE_FILTER, fetchSingleFilter);
}

export default function* editFilterSaga() {
    yield all([
        watchFetchSingleFilterSaga(),
        watchAddNewFilterSaga(),
        watchRemoveFilterSaga()
    ])
}