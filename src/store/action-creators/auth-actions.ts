import {
    AUTHENTICATE,
    AuthenticateAction,
    SIGN_IN,
    SIGN_OUT,
    SignInAction,
    SignOutAction,
    TRY_SIGN_OUT,
    TrySignOutAction,
    UserData
} from "../reducers/auth-reducer";


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
export const trySignoutActionCreator = ():TrySignOutAction=>{
    return {
        type:TRY_SIGN_OUT,
    }
};
export const authenticateActionCreator = ():AuthenticateAction=>{
    return {
        type:AUTHENTICATE,
    }
};