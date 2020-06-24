import {call, put, takeEvery, all, takeLatest} from "redux-saga/effects";
import {FETCH_USER_DATA} from "../reducers/user-reducer";
import userApi from "../../api/user-api";
import {fetchUserDataActionCreator, setErrorActionCreator, setUserActionCreator} from "../action-creators/user-actions";
import {
    EDIT_PROFILE_FORM_FAILURE,
    EDIT_PROFILE_FORM_SUBMIT,
    EDIT_PROFILE_FORM_SUCCESS
} from "../redux-form-actions/edit-profile";

export function* fetchUserData() {
    try {
        let response = yield call(userApi.getUser);
        yield put(setUserActionCreator(response.data.user));
    }catch (e) {
        yield put(setErrorActionCreator(e));
    }
}
export function* editUserData({payload}) {
    let newUserValues = {
        name:payload.name,
        lastname:payload.lastname,
        address:payload.address,
        password:payload.password,
        newPassword:payload.newPassword,
        phone:payload.phone
    };
    try {
        yield call(userApi.editUser, newUserValues);
        yield put({type:EDIT_PROFILE_FORM_SUCCESS});
        yield put(fetchUserDataActionCreator());
    }catch (e) {
        yield put({type: EDIT_PROFILE_FORM_FAILURE, payload: {_error:e.response.data.message}})
    }
}
export function* watchUserDataSaga() {
    yield takeEvery(FETCH_USER_DATA, fetchUserData);
}
export function* watchEditUserDataSaga() {
    yield takeLatest(EDIT_PROFILE_FORM_SUBMIT, editUserData);
}
export default function* profileSaga() {
    yield all([
        watchUserDataSaga(),
        watchEditUserDataSaga()
    ])
}