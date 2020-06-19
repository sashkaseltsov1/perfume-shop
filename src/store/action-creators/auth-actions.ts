import {SIGN_IN, SIGN_OUT, SignInAction, SignOutAction, UserData} from "../reducers/auth-reducer";


export const signinActionCreator = (payload:UserData):SignInAction=>{
    return {
        type:SIGN_IN,
        payload:payload
    }
};
export const signoutActionCreator = ():SignOutAction=>{
    return {
        type:SIGN_OUT,
    }
};