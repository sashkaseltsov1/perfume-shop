import {SIGN_IN, SIGN_OUT} from "../reducers/auth-reducer";


export const signinActionCreator = (payload)=>{
    return {
        type:SIGN_IN,
        payload:payload
    }
};
export const signoutActionCreator = ()=>{
    return {
        type:SIGN_OUT,
    }
};