import userApi from '../../api/user-api';
import {setErrorActionCreator, setUserActionCreator} from "../action-creators/user-actions";
import {SubmissionError} from "redux-form";
import {authenticate} from "./auth-thunks";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";

export interface NewUserValues {
    name:string
    lastname:string
    password:string
    newPassword:string
    phone:string
    address:string
}

export const getUserThunkCreator = ():ThunkAction<void, RootState, void, AnyAction>=>{
    return async (dispatch, getState)=>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            userApi.getUser().then(response=>{
                dispatch(setUserActionCreator(response.data.user));
            }).catch(err=>{
                dispatch(setErrorActionCreator(err));
                console.log(err)
            })
        }
    }
};

export const editUserThunkCreator = (values:NewUserValues):ThunkAction<void, RootState, void, AnyAction>=>{
    return async (dispatch, getState)=>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            return userApi.editUser(values).then(response=>{
                dispatch(getUserThunkCreator());
            }).catch((err)=>{throw new SubmissionError({_error:err.response.data.message})});
        }

    }
};

