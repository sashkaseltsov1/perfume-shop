import {SET_ERROR, SET_FILTER, SET_INITIAL} from "../reducers/edit-filter-reducer";

export const setFilterActionCreator = (state)=>{
    return {
        type:SET_FILTER,
        state:state
    }
};
export const setErrorActionCreator = (error)=>{
    return {
        type:SET_ERROR,
        error:error
    }
};
export const setInitialActionCreator = ()=>{
    return {
        type:SET_INITIAL,
    }
};