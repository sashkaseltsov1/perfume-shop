import userApi from '../../api/user-api';
import {setErrorActionCreator, setInitialStateActionCreator, setUserActionCreator} from "../actions/user-actions";

export const getUserThunkCreator = ()=>{
    return (dispatch)=>{
        userApi.getUser().then(response=>{
            dispatch(setUserActionCreator(response.data.user));
        }).catch(err=>{
            dispatch(setErrorActionCreator());
            console.log(err)
        })
    }
};
export const setInitialThunkCreator = ()=>{
    return (dispatch)=>{
        dispatch(setInitialStateActionCreator());
    }
};

