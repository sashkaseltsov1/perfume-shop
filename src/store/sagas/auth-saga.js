import {call, put, all, takeLatest, takeEvery} from "redux-saga/effects";
import {SIGN_UP_FORM_FAILURE, SIGN_UP_FORM_SUBMIT, SIGN_UP_FORM_SUCCESS} from "../redux-form-actions/sign-up";
import authApi, {saveTokens} from "../../api/auth-api";
import {SIGN_IN_FORM_FAILURE, SIGN_IN_FORM_SUBMIT, SIGN_IN_FORM_SUCCESS} from "../redux-form-actions/sign-in";
import {authenticateActionCreator, signoutActionCreator} from "../action-creators/auth-actions";
import {TRY_SIGN_OUT} from "../reducers/auth-reducer";

export function* trySignUp({payload}) {
    if (payload.password !== payload.confirmPassword) {
        yield put({type: SIGN_UP_FORM_FAILURE, payload: {_error: 'Пароли не совпадают!'}});
    } else {
        try {
            yield call(authApi.signup, payload);
            yield put({type: SIGN_UP_FORM_SUCCESS});
        } catch (e) {
            yield put({type: SIGN_UP_FORM_FAILURE, payload: {_error: e.response.data.message}});
        }
    }
}
export function* trySignIn({payload}) {
    try {
        let response = yield call(authApi.signin, payload);
        saveTokens(response.data);
        yield put({type: SIGN_IN_FORM_SUCCESS});
        yield put(authenticateActionCreator());
    } catch (e) {
        yield put({type: SIGN_IN_FORM_FAILURE, payload: {_error: e.response.data.message}});
    }
}
export function* trySignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    yield put(signoutActionCreator());
}
export function* watchSignUpSaga() {
    yield takeLatest(SIGN_UP_FORM_SUBMIT, trySignUp);
}
export function* watchSignInSaga() {
    yield takeLatest(SIGN_IN_FORM_SUBMIT, trySignIn);
}
export function* watchSignOutSaga() {
    yield takeEvery(TRY_SIGN_OUT, trySignOut);
}
export default function* authSaga() {
    yield all([
        watchSignUpSaga(),
        watchSignInSaga(),
        watchSignOutSaga()
    ])
}