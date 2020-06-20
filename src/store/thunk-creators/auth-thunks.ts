import authApi, {saveTokens} from "../../api/auth-api";
import jwtDecode from "jwt-decode";
import {signinActionCreator, signoutActionCreator} from "../action-creators/auth-actions";
import {SubmissionError} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import { AnyAction} from "redux";
import {UserData} from "../reducers/auth-reducer";

export interface SignInValues {
    email:string
    password:string
}
export interface SignUpValues extends SignInValues{
    confirmPassword:string
    name:string
    lastname:string
}

export const signinThunkCreator = (values:SignInValues):ThunkAction<void, RootState, void, AnyAction>=>{
    return (dispatch) =>{
        return authApi.signin(values).then((response)=>{
            saveTokens(response.data);
            dispatch(authenticate());
            }).catch((err)=>{throw new SubmissionError({_error:err.response.data.message})});
    }
};
export const signoutThunkCreator = ():ThunkAction<void, RootState, void, AnyAction>=>{
    return (dispatch) =>{
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        dispatch(signoutActionCreator());
    }
};
export const signupThunkCreator = (values:SignUpValues)=>{
    return () =>{
        if(values.password!==values.confirmPassword) {
            return new Promise(()=>{throw new SubmissionError({_error:'Пароли не совпадают!'})});
        }
        return authApi.signup(values).then(()=>{
        }).catch((err)=>{throw new SubmissionError({_error:err.response.data.message})});
    }
};
export const authenticate = ():ThunkAction<void, RootState, void, AnyAction>=>{
    return (dispatch, getState)=>{
        let isAuthorized = getState().auth.isAuthorized;
        return authApi.auth().then(response=>{
            let tokens = response.data;
            let decodedToken:UserData = jwtDecode(tokens.token);
            isAuthorized!==true && dispatch(signinActionCreator(decodedToken));
        }).catch(err=>{
            isAuthorized!==false && dispatch(signoutActionCreator());
            console.log(err);
        });
    }
};