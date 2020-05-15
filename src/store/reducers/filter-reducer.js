import {getProductsThunkCreator} from "./product-reducer";

const axios = require('axios');

const SET_OPTION = 'SET_OPTION';
const GET_FILTERS = 'GET_FILTERS';

const FilterReducer = (state={filters:[]}, action)=>{
    switch (action.type) {
        case SET_OPTION:
            let i = state.filters.indexOf(action.item);
            let newState = {filters:[...state.filters]};
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

export const setOptionThunkCreator = (item, option, state)=>{

    return (dispatch)=>{
        dispatch(setOptionActionCreator(item, option, state));
    }
};
const joinStateToQueryString = (state)=>{
    let newState = state.map(prm=>
        ({category:prm.category, params:prm.items.filter(p=>
                p.state).map(p=>
                p._id)})).filter(arr=>arr.params.length>0);
    let offers = newState.find(item=>item.category==='specialOffers')?.params.map(offer=>({category:offer, params:[true]}));
    if(offers){
        newState =  newState.filter(item=>item.category!=='specialOffers');
        newState = [...offers, ...newState];
    }
    newState = newState.map(item=>(item.category+'='+item.params.join('|')));

    return '?'+newState.join('&');
}
export const filterThunkCreator = ()=>{
    return (dispatch, getState) =>{
        let state = getState().filters.filters;
        let queryString = joinStateToQueryString(state);
        console.log(queryString)
        dispatch(getProductsThunkCreator(queryString))

    }
}
export const getFiltersThunkCreator = ()=>{
    return (dispatch)=>{
        axios.get('http://176.197.36.4:8000/filters')
            .then(function (response) {
                let data = response.data.filters.map(item=>{
                    let items = item.items.map(option=>{return {...option, state:false}});
                    item={...item,items:items};
                    return item;
                });
                dispatch(getFiltersActionCreator({filters:data}))
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