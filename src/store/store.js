import ProductReducer from "./reducers/product-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import FilterReducer from "./reducers/filter-reducer";
import TestReducer from "./reducers/test";


const reducers = {
    products: ProductReducer,
    filters:FilterReducer,
    test:TestReducer
};

const combinedReducers = combineReducers(reducers);

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;