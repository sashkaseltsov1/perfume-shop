import {getProductsThunkCreator} from "./product-reducer";
import {createBrowserHistory} from 'history';
import axios from 'axios';

const SET_OPTION = 'SET_OPTION';
const GET_FILTERS = 'GET_FILTERS';
const SET_RANGE = 'SET_SLIDER_RANGE';
const RESET_FILTERS = 'RESET_FILTERS';
const initialState = {
    filters:[],
    rangeFilter:{
        name:'',
        domain:[0, 50000],
        sliderState:[0, 50000],
        fieldState:[0,50000]
    }
}

const FilterReducer = (state=initialState, action)=>{
    switch (action.type) {
        case RESET_FILTERS:
            return {
                rangeFilter:{...state.rangeFilter,sliderState:[0,50000], fieldState:[0,50000]},
                filters:state.filters.map(item=>{
                    let items = item.items.map(option=>{
                        return {...option,
                            state:false}});
                    item={...item,items:items};
                    return item;
                })
            };

        case SET_RANGE:
            return {...state, rangeFilter: action.values};
        case SET_OPTION:
            let i = state.filters.indexOf(action.item);
            let newState = {...state, filters:[...state.filters]};
            newState.filters[i]={...action.item, items:[...action.item.items]};
            let k = newState.filters[i].items.indexOf(action.option);
            newState.filters[i].items[k]={...action.option, state:action.state};
            return newState;
        case GET_FILTERS:
            return action.data;
        default:
            return state;
    }
};

const setOptionActionCreator = (item, option, state)=>{
    return {
        type:SET_OPTION,
        item:item,
        option:option,
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
export const setRangeOptionThunkCreator = (values) =>{
    return (dispatch)=>{
        dispatch(setRangeOptionActionCreator(values));
    }
}
export const resetFiltersThunkCreator = () =>{
    return (dispatch)=>{
        dispatch(resetFiltersActionCreator());
        let history = createBrowserHistory();
        history.push('?');
        dispatch(getProductsThunkCreator('?'));
    }
}
export const setOptionThunkCreator = (item, option, state)=>{
    return (dispatch)=>{
        dispatch(setOptionActionCreator(item, option, state));
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
export const filterThunkCreator = ()=>{

    return (dispatch, getState) =>{
        let state = getState().filters;
        let queryString = joinStateToQueryString(state);
        let history = createBrowserHistory();
        history.push(queryString);
        dispatch(getProductsThunkCreator(queryString))
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
                let data = response.data.filters.map(item=>{
                    let items = item.items.map(option=>{
                        return {...option,
                        state:categories.includes(option._id)}});
                    item={...item,items:items};
                    return item;
                });
                if(ranges[0]===undefined) ranges[0]=0;
                if(ranges[1]===undefined) ranges[1]=50000;
                let rangeFilter = {
                    name:'Цена, руб.',
                    domain:[0, 50000],
                    sliderState:ranges,
                    fieldState:ranges
                }

                dispatch(getFiltersActionCreator({filters:data, rangeFilter:rangeFilter}))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {

            });
    }
};

export default FilterReducer;