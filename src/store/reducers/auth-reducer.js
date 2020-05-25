export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

const initialState = {
};

const AuthReducer = (state=initialState, action)=>{

    switch (action.type) {
        case SIGN_IN:
            return {...action.payload, isAuthorized: true};
        case SIGN_OUT:
            return {isAuthorized: false};
        default:
            return state;
    }
};



export default AuthReducer;