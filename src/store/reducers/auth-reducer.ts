export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

interface UserData{
    address?: string
    exp?:number
    iat?:number
    name?:string
    role?:'Admin'|'User'
    tokenType?:'access'|'refresh'
    _id?:string
}

interface SignInAction{
    type: typeof SIGN_IN
    payload:UserData
}

interface SignOutAction {
    type: typeof SIGN_OUT
}

const initialState:Auth = {
    isAuthorized:undefined,
    address:undefined,
    exp:undefined,
    iat:undefined,
    name:undefined,
    role:undefined,
    tokenType:undefined,
    _id:undefined
};
interface Auth extends UserData{
    isAuthorized?:boolean
}
type ActionTypes = SignInAction|SignOutAction

const AuthReducer = (state=initialState, action:ActionTypes):Auth=>{
    switch (action.type) {
        case SIGN_IN:
            return {...action.payload, isAuthorized: true};
        case SIGN_OUT:
            return {...initialState, isAuthorized: false};
        default:
            return state;
    }
};

export default AuthReducer;