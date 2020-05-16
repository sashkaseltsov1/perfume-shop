import ProductReducer from "./reducers/product-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import FilterReducer from "./reducers/filter-reducer";


const reducers = {
    products: ProductReducer,
    filters:FilterReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;