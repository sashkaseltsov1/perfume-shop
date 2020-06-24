import authApi from "../../api/auth-api";
import jwtDecode from "jwt-decode";
import {signinActionCreator,trySignoutActionCreator} from "../action-creators/auth-actions";
import {FETCH_USER_DATA} from "../reducers/user-reducer";
import { Middleware } from "redux";
import {AUTHENTICATE, UserData} from "../reducers/auth-reducer";
import {EDIT_PROFILE_FORM_SUBMIT} from "../redux-form-actions/edit-profile";
import {FETCH_ORDER} from "../reducers/order-reducer";
import {ADD_ORDER_FORM_SUBMIT} from "../redux-form-actions/add-order";
import {ADD_FILTER, REMOVE_FILTER} from "../reducers/edit-filter-reducer";
import {CHANGE_COMMENT_STATE, CREATE_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT} from "../reducers/product-reducer";

const isNeedAuthenticate =  (actionType:string)=>{
    let actionTypes = [
        AUTHENTICATE,
        FETCH_USER_DATA,
        EDIT_PROFILE_FORM_SUBMIT,
        FETCH_ORDER,
        ADD_ORDER_FORM_SUBMIT,
        ADD_FILTER,
        REMOVE_FILTER,
        CHANGE_COMMENT_STATE,
        CREATE_PRODUCT,
        UPDATE_PRODUCT,
        REMOVE_PRODUCT
    ];
    return actionTypes.filter(type=>type===actionType).length>0;
};

const AuthMiddleware:Middleware  = ({dispatch, getState})=>{
    return (next)=>{
        return async (action)=>{
            if(isNeedAuthenticate(action.type)){
                let isAuthorized = getState().auth.isAuthorized;
                try {
                    let response = await authApi.auth();
                    let tokens = response.data;
                    let decodedToken:UserData = jwtDecode(tokens.token);
                    isAuthorized!==true && dispatch(signinActionCreator(decodedToken));
                }catch (e) {
                    isAuthorized!==false && dispatch(trySignoutActionCreator());
                    return;
                }
            }
            return next(action)
        }
    }
};

export default AuthMiddleware;