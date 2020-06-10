import {
    GET_FILTERS,
    RESET_FILTERS,
    SET_ACTIVE_FILTERS, SET_INITIAL,
    SET_OPTION,
    SET_RANGE, SET_SEARCH,
    SET_SORT
} from "../reducers/filter-reducer";



export const setInitialActionCreator = ()=>{
    return {
        type:SET_INITIAL,
    }
};
export const setOptionActionCreator = (category, optionId, state)=>{
    return {
        type:SET_OPTION,
        category:category,
        optionId:optionId,
        state:state
    }
};
export const getFiltersActionCreator = (data)=>{
    return {
        type:GET_FILTERS,
        data:data
    }
};

export const resetFiltersActionCreator = ()=>{
    return {
        type:RESET_FILTERS
    }
};
export const setRangeOptionActionCreator = (values)=>{
    return {
        type:SET_RANGE,
        values:values
    }
};
export const setSortFilterActionCreator = (value)=>{
    return {
        type:SET_SORT,
        value:value
    }
};
export const setSearchFilterActionCreator = (value)=>{
    return {
        type:SET_SEARCH,
        value:value
    }
};
export const setActiveFiltersActionCreator = (activeFilters)=>{
    return {
        type:SET_ACTIVE_FILTERS,
        activeFilters:activeFilters
    }
};

