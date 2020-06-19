import instance from "../../api/filters-api";
import {setErrorActionCreator, setFilterActionCreator} from "../action-creators/edit-filter-actions";
import {authenticate} from "./auth-thunks";

export const getFilterThunkCreator = (category)=>{
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
export const addFilterThunkCreator = (category, type)=>{
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
export const removeFilterThunkCreator = (category, optionId)=>{
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