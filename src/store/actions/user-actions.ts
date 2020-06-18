import {SET_ERROR, SET_INITIAL, SET_USER} from "../reducers/user-reducer";
import {User} from "../types/user";



export const setUserActionCreator = (user:User)=>{
    return {
        type:SET_USER,
        user:user
    }
};
export const setErrorActionCreator = (error:string)=>{
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
