import ProductReducer from "./reducers/product-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import FilterReducer from "./reducers/filter-reducer";
import MainPageReducer from "./reducers/main-page-reducer";
import { reducer as formReducer } from 'redux-form'


const reducers = {
    products: ProductReducer,
    filters:FilterReducer,
    mainPage:MainPageReducer,
    form:formReducer
};

const combinedReducers = combineReducers(reducers);

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;