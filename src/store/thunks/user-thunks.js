import userApi from '../../api/user-api';
import {setErrorActionCreator, setInitialStateActionCreator, setUserActionCreator} from "../actions/user-actions";
import {SubmissionError} from "redux-form";
import {authenticate} from "./auth-thunks";


export const getUserThunkCreator = ()=>{
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
export const setInitialThunkCreator = ()=>{
    return (dispatch)=>{
        dispatch(setInitialStateActionCreator());
    }
};
export const editUserThunkCreator = (values)=>{
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

