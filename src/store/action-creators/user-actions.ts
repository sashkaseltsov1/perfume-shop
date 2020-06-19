import {
    SET_ERROR,
    SET_INITIAL,
    SET_USER,
    UserAction,
    UserErrorAction,
    UserInitialAction
} from "../reducers/user-reducer";
import {User} from "../types/user";

export const setUserActionCreator = (user:User):UserAction=>{
    return {
        type:SET_USER,
        user:user
    }
};
export const setErrorActionCreator = (error:string):UserErrorAction=>{
    return {
        type:SET_ERROR,
        error:error
    }
};
export const setInitialStateActionCreator = ():UserInitialAction=>{
    return {
        type:SET_INITIAL,
    }
};
