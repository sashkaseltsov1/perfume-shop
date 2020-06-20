import CatalogReducer from "./reducers/catalog-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import FilterReducer from "./reducers/filter-reducer";
import MainPageReducer from "./reducers/main-page-reducer";
import { reducer as formReducer } from 'redux-form'
import AuthReducer from "./reducers/auth-reducer";
import UserReducer from "./reducers/user-reducer";
import OrderReducer from "./reducers/order-reducer";
import ProductReducer from "./reducers/product-reducer";
import CartReducer from "./reducers/cart-reducer";
import EditFilterReducer from "./reducers/edit-filter-reducer";

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

const store = createStore(combinedReducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof combinedReducers>

export default store;
