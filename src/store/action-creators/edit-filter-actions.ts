import {
    ADD_FILTER,
    AddFilterAction,
    EditFilterAction,
    EditFilterErrorAction,
    EditFilterInitialAction,
    EditFilterPage,
    FETCH_SINGLE_FILTER,
    FetchSingleFilterAction,
    REMOVE_FILTER,
    RemoveFilterAction,
    SET_ERROR,
    SET_FILTER,
    SET_INITIAL
} from "../reducers/edit-filter-reducer";

export const removeFilterActionCreator = (category:string, optionId:string):RemoveFilterAction=>{
    return {
        type:REMOVE_FILTER,
        category:category,
        optionId:optionId
    }
};
export const addFilterActionCreator = (category:string, optionType:string):AddFilterAction=>{
    return {
        type:ADD_FILTER,
        category:category,
        optionType:optionType
    }
};
export const fetchSingleFilterActionCreator = (category:string):FetchSingleFilterAction=>{
    return {
        type:FETCH_SINGLE_FILTER,
        category:category
    }
};
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