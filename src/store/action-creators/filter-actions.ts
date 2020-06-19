import {
    Filters, FiltersAction, FiltersActiveAction,
    FiltersInitialAction,
    FiltersOptionAction, FiltersRangeAction, FiltersResetAction, FiltersSearchAction, FiltersSortAction,
    GET_FILTERS,
    RESET_FILTERS,
    SET_ACTIVE_FILTERS, SET_INITIAL,
    SET_OPTION,
    SET_RANGE, SET_SEARCH,
    SET_SORT
} from "../reducers/filter-reducer";
import {ActiveFilter, RangeFilter} from "../types/filters";

export const setInitialActionCreator = ():FiltersInitialAction=>{
    return {
        type:SET_INITIAL,
    }
};
export const setOptionActionCreator = (category:string, optionId:string, state:boolean):FiltersOptionAction=>{
    return {
        type:SET_OPTION,
        category:category,
        optionId:optionId,
        state:state
    }
};
export const getFiltersActionCreator = (data:Filters):FiltersAction=>{
    return {
        type:GET_FILTERS,
        data:data
    }
};
export const resetFiltersActionCreator = ():FiltersResetAction=>{
    return {
        type:RESET_FILTERS
    }
};
export const setRangeOptionActionCreator = (values:RangeFilter):FiltersRangeAction=>{
    return {
        type:SET_RANGE,
        values:values
    }
};
export const setSortFilterActionCreator = (value:'dec'|'inc'):FiltersSortAction=>{
    return {
        type:SET_SORT,
        value:value
    }
};
export const setSearchFilterActionCreator = (value:string):FiltersSearchAction=>{
    return {
        type:SET_SEARCH,
        value:value
    }
};
export const setActiveFiltersActionCreator = (activeFilters:Array<ActiveFilter>):FiltersActiveAction=>{
    return {
        type:SET_ACTIVE_FILTERS,
        activeFilters:activeFilters
    }
};

