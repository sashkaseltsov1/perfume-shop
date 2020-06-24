import {FilterOption} from "../types/filters";

export const SET_FILTER = 'edit-filter/SET_FILTER';
export const SET_ERROR = 'edit-filter/SET_ERROR';
export const SET_INITIAL = 'edit-filter/SET_INITIAL';
export const FETCH_SINGLE_FILTER = 'edit-filter/FETCH_SINGLE_FILTER';
export const ADD_FILTER = 'edit-filter/ADD_FILTER';
export const REMOVE_FILTER = 'edit-filter/REMOVE_FILTER';

export interface RemoveFilterAction{
    type: typeof REMOVE_FILTER
    category:string
    optionId:string
}
export interface AddFilterAction{
    type: typeof ADD_FILTER
    category:string
    optionType:string
}
export interface FetchSingleFilterAction{
    type: typeof FETCH_SINGLE_FILTER
    category:string
}
export interface EditFilterAction{
    type: typeof SET_FILTER
    state:Omit<EditFilterPage, 'error'>
}
export interface EditFilterErrorAction{
    type: typeof SET_ERROR
    error:string
}
export interface EditFilterInitialAction{
    type: typeof SET_INITIAL
}
export interface EditFilterPage {
    category:string
    name:string
    error?:string
    items?:Array<Omit<FilterOption, 'state'>>
}

type ActionTypes = EditFilterAction|EditFilterErrorAction|EditFilterInitialAction

const initialState:EditFilterPage = {
    category:'',
    name:'',
    items:undefined,
    error:undefined
};

const EditFilterReducer = (state=initialState, action:ActionTypes):EditFilterPage=>{
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