import CatalogReducer from "./reducers/catalog-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import FilterReducer from "./reducers/filter-reducer";
import MainPageReducer from "./reducers/main-page-reducer";
import { reducer as formReducer } from 'redux-form'
import AuthReducer from "./reducers/auth-reducer";
import UserReducer from "./reducers/user-reducer";
import OrderReducer from "./reducers/order-reducer";
import ProductReducer from "./reducers/product-reducer";
import CartReducer from "./reducers/cart-reducer";
import EditFilterReducer from "./reducers/edit-filter-reducer";
import createSagaMiddleware from 'redux-saga'
import watchMainPageSaga from "./sagas/main-page-saga";
import { all } from "redux-saga/effects";
import cartSaga from "./sagas/cart-saga";
import AuthMiddleware from "./middlewares/auth-middleware";
import profileSaga from "./sagas/profile-saga";
// @ts-ignore
import {addFormSubmitSagaTo} from 'redux-form-submit-saga';
import authSaga from "./sagas/auth-saga";
import orderSaga from "./sagas/order-saga";
import watchFetchProductsSaga from "./sagas/catalog-saga";
import filterSaga from "./sagas/filter-saga";
import editFilterSaga from "./sagas/edit-filter-saga";
import productSaga from "./sagas/product-saga";

const reducers = {
    products: CatalogReducer,
    product:ProductReducer,
    filters:FilterReducer,
    mainPage:MainPageReducer,
    auth:AuthReducer,
    profile:UserReducer,
    orderPage:OrderReducer,
    cart:CartReducer,
    editFilter:EditFilterReducer,
    form:formReducer,
};

const combinedReducers = combineReducers(reducers);

const saga = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(AuthMiddleware,saga));

function * allSagas() {
    yield all([
        watchMainPageSaga(),
        cartSaga(),
        profileSaga(),
        authSaga(),
        orderSaga(),
        watchFetchProductsSaga(),
        filterSaga(),
        editFilterSaga(),
        productSaga()
    ])
}
const rootSaga = addFormSubmitSagaTo(allSagas);
saga.run(rootSaga);
export type RootState = ReturnType<typeof combinedReducers>

export default store;
