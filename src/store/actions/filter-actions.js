import axios from "axios";
import {getProductsThunkCreator} from "./product-actions";
import { createBrowserHistory } from "history";

export const SET_OPTION = 'SET_OPTION';
export const GET_FILTERS = 'GET_FILTERS';
export const SET_RANGE = 'SET_SLIDER_RANGE';
export const RESET_FILTERS = 'RESET_FILTERS';
export const SET_ACTIVE_FILTERS='SET_ACTIVE_FILTERS';

const setOptionActionCreator = (category, optionId, state)=>{
    return {
        type:SET_OPTION,
        category:category,
        optionId:optionId,
        state:state
    }
};
const getFiltersActionCreator = (data)=>{
    return {
        type:GET_FILTERS,
        data:data
    }
};

const resetFiltersActionCreator = ()=>{
    return {
        type:RESET_FILTERS
    }
};
const setRangeOptionActionCreator = (values)=>{
    return {
        type:SET_RANGE,
        values:values
    }
};
const setActiveFiltersActionCreator = (activeFilters)=>{
    return {
        type:SET_ACTIVE_FILTERS,
        activeFilters:activeFilters
    }
};
export const setRangeOptionThunkCreator = (values) =>{
    return (dispatch)=>{
        dispatch(setRangeOptionActionCreator(values));
    }
};

export const resetFiltersThunkCreator = () =>{
    return (dispatch)=>{
        dispatch(resetFiltersActionCreator());
        let history = createBrowserHistory();
        history.push('?');
        dispatch(getProductsThunkCreator('?'));
    }
}
export const setOptionThunkCreator = (category, optionId, state)=>{
    return (dispatch)=>{
        dispatch(setOptionActionCreator(category, optionId, state));
    }
};
const joinStateToQueryString = (state)=>{
    let newState = state.filters.map(prm=>
        ({category:prm.category, params:prm.items.filter(p=>
                p.state).map(p=>
                p._id)})).filter(arr=>arr.params.length>0);
    let offers = newState.find(item=>item.category==='specialOffers')?.params.map(offer=>({category:offer, params:[true]}));
    if(offers){
        newState =  newState.filter(item=>item.category!=='specialOffers');
        newState = [...offers, ...newState];
    }
    newState = newState.map(item=>(item.category+'='+item.params.join('%7C')));
    let rangeFilterState = state.rangeFilter;
    if(rangeFilterState.fieldState[0]!==rangeFilterState.domain[0]) newState.push('min='+rangeFilterState.fieldState[0]);
    if(rangeFilterState.fieldState[1]!==rangeFilterState.domain[1]) newState.push('max='+rangeFilterState.fieldState[1]);
    return '?'+newState.join('&');
};
const initializeActiveFilters = (filters)=>{
    let activeFilters=[];
    filters.forEach(filter =>{
        filter.items.forEach((option=>{
            if(option.state) activeFilters.push({category:filter.category, optionId:option._id, type:option.type})
        }))
    });
    return activeFilters;
};
export const abortActiveFilterThunkCreator = (category, optionId, state)=>{
    return (dispatch) =>{
        if(!state.isInitial){
            dispatch(setOptionActionCreator(category, optionId, state));
            dispatch(filterThunkCreator());
        }
    }
};
export const filterThunkCreator = ()=>{

    return (dispatch, getState) =>{
        let state = getState().filters;
        if(!state.isInitial)
        {
            let queryString = joinStateToQueryString(state);
            let activeFilters = initializeActiveFilters(state.filters);
            dispatch(setActiveFiltersActionCreator(activeFilters));
            let history = createBrowserHistory();
            history.push(queryString);
            dispatch(getProductsThunkCreator(queryString))
        }

    }
}
const parseQueryString = (queryString)=>{

    let queries = queryString.split('&');
    queries[0]=queries[0].substring(1);
    queries = queries.map(query=>{
        let splited = query.split('=');
        return {category:splited[0], params:splited[1]}
    });
    let discountOrNovelty = queries.filter(query=>(query.category==='isDiscount' && query.params==='true') ||
        (query.category==='isNovelty' && query.params==='true')).map(query=>query.category);
    let min = queries.filter(query=>query.category==='min' && Number.isInteger(Number(query.params)));
    min=min[0]?.params;
    let max = queries.filter(query=>query.category==='max' && Number.isInteger(Number(query.params)));
    max=max[0]?.params;
    let other = queries.filter(query=>query.category!=='isDiscount' && query.category!=='isNovelty'
        && query.category!=='min' && query.category!=='max').map(query=>query.params);
    other = other.join('')?.split('%7C');
    return [[...discountOrNovelty, ...other], [min,max]];
};

export const getFiltersThunkCreator = ()=>{
    return (dispatch)=>{
        axios.get('http://176.197.36.4:8000/filters')
            .then(function (response) {
                let history = createBrowserHistory();
                let [categories, ranges] = parseQueryString(history.location.search);
                let activeFilters = [];
                let data = response.data.filters.map(item=>{
                    let items = item.items.map(option=>{
                        let optionState = categories.includes(option._id);
                        let newOption = {...option,state:optionState};
                        if(optionState) activeFilters.push({category:item.category, optionId:newOption._id, type:option.type});
                        return newOption});
                    let newItem={...item,items:items};
                    return newItem;
                });
                if(ranges[0]===undefined) ranges[0]=0;
                if(ranges[1]===undefined) ranges[1]=50000;
                let rangeFilter = {
                    name:'Цена, руб.',
                    domain:[0, 50000],
                    sliderState:ranges,
                    fieldState:ranges
                };

                dispatch(getFiltersActionCreator({filters:data, rangeFilter:rangeFilter, activeFilters:activeFilters}))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {

            });
    }
};