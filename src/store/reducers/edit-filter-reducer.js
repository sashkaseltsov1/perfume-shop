export const SET_FILTER = 'edit-filter/SET_FILTER';
export const SET_ERROR = 'edit-filter/SET_ERROR';
export const SET_INITIAL = 'edit-filter/SET_INITIAL';
const initialState = {
    category:'',
    name:'',
    items:undefined,
    error:undefined
};

const EditFilterReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_INITIAL:
            return {...initialState};
        case SET_ERROR:
            return {...state, error:action.error};
        case SET_FILTER:
            return {...state, ...action.state};
        default:
            return state;
    }
};

export default EditFilterReducer;