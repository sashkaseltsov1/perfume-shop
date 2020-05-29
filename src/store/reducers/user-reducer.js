export const SET_USER = 'user/SET_USER';
export const SET_ERROR = 'user/SET_ERROR';
export const SET_INITIAL = 'user/SET_INITIAL';

const initialState = {
    user:undefined,
    error:undefined
};

const UserReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_INITIAL:
            return {};
        case SET_ERROR:
            return {...initialState, error:action.error};
        case SET_USER:
            return {...initialState, user:action.user};
        default:
            return state;
    }
};

export default UserReducer;