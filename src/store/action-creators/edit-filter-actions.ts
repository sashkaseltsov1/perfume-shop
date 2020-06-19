import {
    EditFilterAction,
    EditFilterErrorAction, EditFilterInitialAction,
    EditFilterPage,
    SET_ERROR,
    SET_FILTER,
    SET_INITIAL
} from "../reducers/edit-filter-reducer";

export const setFilterActionCreator = (state:Omit<EditFilterPage, 'error'>):EditFilterAction=>{
    return {
        type:SET_FILTER,
        state:state
    }
};
export const setErrorActionCreator = (error:string):EditFilterErrorAction=>{
    return {
        type:SET_ERROR,
        error:error
    }
};
export const setInitialActionCreator = ():EditFilterInitialAction=>{
    return {
        type:SET_INITIAL,
    }
};