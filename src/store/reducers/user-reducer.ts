import {User} from "../types/user";

export const SET_USER = 'user/SET_USER';
export const SET_ERROR = 'user/SET_ERROR';
export const SET_INITIAL = 'user/SET_INITIAL';

interface UserAction {
    type: typeof SET_USER
    user:User
}
interface ErrorAction {
    type: typeof SET_ERROR
    error:string
}
interface InitialAction {
    type: typeof SET_INITIAL
}
interface Profile {
    user?:User,
    error?:string
}

const initialState:Profile = {
    user:undefined,
    error:undefined
};
type ActionTypes = ErrorAction|UserAction|InitialAction

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