import instance from "../../api/filters-api";
import {setErrorActionCreator, setFilterActionCreator} from "../action-creators/edit-filter-actions";
import {authenticate} from "./auth-thunks";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";

export const getFilterThunkCreator = (category:string):ThunkAction<void, RootState, void, AnyAction>=>{
    return (dispatch)=>{
        instance.getFilter(category)
            .then( (res)=> {
                dispatch(setFilterActionCreator(res.data));
            })
            .catch( (error) =>{
                dispatch(setErrorActionCreator(error));
            })
    }
};
export const addFilterThunkCreator = (category:string, type:string):ThunkAction<void, RootState, void, AnyAction>=>{
    return async(dispatch, getState)=>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            instance.addFilter(category, type)
                .then( (res)=> {
                    dispatch(setFilterActionCreator(res.data));
                })
                .catch( (error) =>{
                    alert(error);
                })
        }
    }
};
export const removeFilterThunkCreator = (category:string, optionId:string):ThunkAction<void, RootState, void, AnyAction>=>{
    return async(dispatch, getState)=>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            instance.removeFilter(category, optionId)
                .then( (res)=> {
                    dispatch(setFilterActionCreator(res.data));
                })
                .catch( (error) =>{
                    alert(error);
                })
        }
    }
};