import {SET_ERROR, SET_INITIAL, SET_USER} from "../reducers/user-reducer";



export const setUserActionCreator = (user)=>{
    return {
        type:SET_USER,
        user:user
    }
};
export const setErrorActionCreator = (error)=>{
    return {
        type:SET_ERROR,
        error:error
    }
};
export const setInitialStateActionCreator = ()=>{
    return {
        type:SET_INITIAL,
    }
};
