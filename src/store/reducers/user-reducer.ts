import {User} from "../types/user";
export const SET_USER = 'user/SET_USER';
export const SET_ERROR = 'user/SET_ERROR';
export const SET_INITIAL = 'user/SET_INITIAL';
export const FETCH_USER_DATA = 'user/FETCH_USER_DATA';

export interface NewUserValues {
    name:string
    lastname:string
    password:string
    newPassword:string
    phone:string
    address:string
}

export interface UserAction {
    type: typeof SET_USER
    user:User
}
export interface FetchUserDataAction {
    type: typeof FETCH_USER_DATA
}

export interface UserErrorAction {
    type: typeof SET_ERROR
    error:string
}
export interface UserInitialAction {
    type: typeof SET_INITIAL
}
export interface Profile {
    user?:User,
    error?:string
}

const initialState:Profile = {
    user:undefined,
    error:undefined
};
type ActionTypes = UserErrorAction|UserAction|UserInitialAction

const UserReducer = (state=initialState, action:ActionTypes):Profile=>{
    switch (action.type) {
        case SET_INITIAL:
            return {...initialState};
        case SET_ERROR:
            return {...state, error:action.error};
        case SET_USER:
            return {...state, user:action.user};
        default:
            return state;
    }
};

export default UserReducer;