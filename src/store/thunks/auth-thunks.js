import authApi, {saveTokens} from "../../api/auth-api";
import jwtDecode from "jwt-decode";
import {signinActionCreator, signoutActionCreator} from "../actions/auth-actions";
import {SubmissionError} from "redux-form";
import {setInitialProductsActionCreator} from "../actions/product-actions";

export const setInitialProductsThunkCreator = ()=>{
    return (dispatch) =>{
        dispatch(setInitialProductsActionCreator());
    }
};
export const signinThunkCreator = (values)=>{
    return (dispatch) =>{
        return authApi.signin(values).then((response)=>{
            saveTokens(response.data);
            dispatch(authenticate());
            }).catch((err)=>{throw new SubmissionError({_error:err.response.data.message})});
    }
};
export const signoutThunkCreator = ()=>{
    return (dispatch) =>{
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        dispatch(signoutActionCreator());
    }
};
export const signupThunkCreator = (values)=>{
    return () =>{
        if(values.password!==values.confirmPassword) {
            return new Promise(()=>{throw new SubmissionError({_error:'Пароли не совпадают!'})});
        }
        return authApi.signup(values).then(()=>{

        }).catch((err)=>{throw new SubmissionError({_error:err.response.data.message})});
    }
};
export const authenticate = ()=>{
    return (dispatch, getState)=>{
        let isAuthorized = getState().auth.isAuthorized;
        return authApi.auth().then(response=>{
            let tokens = response.data;
            let decodedToken = jwtDecode(tokens.token);
            isAuthorized!==true && dispatch(signinActionCreator(decodedToken));
        }).catch(err=>{
            isAuthorized!==false && dispatch(signoutActionCreator());
            console.log(err);
        });
    }
};