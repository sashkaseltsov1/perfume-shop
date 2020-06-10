export const SET_OPTION = 'filters/SET_OPTION';
export const GET_FILTERS = 'filters/GET_FILTERS';
export const SET_RANGE = 'filters/SET_SLIDER_RANGE';
export const SET_SEARCH = 'filters/SET_SEARCH';
export const RESET_FILTERS = 'filters/RESET_FILTERS';
export const SET_ACTIVE_FILTERS='filters/SET_ACTIVE_FILTERS';
export const SET_SORT='filters/SET_SORT';
export const SET_INITIAL='filters/SET_INITIAL';

const initialState = {
    isInitial:true,
    filters:[],
    rangeFilter:{
        name:'',
        domain:[0, 50000],
        sliderState:[0, 50000],
        fieldState:[0,50000],
    },
    sortFilter:null,
    activeFilters:[],
    search:''
};

const FilterReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_SEARCH:
            return {...state, search: action.value};
        case SET_INITIAL:
            return {...initialState};
        case SET_SORT:
            return {...state, sortFilter: action.value};
        case SET_ACTIVE_FILTERS:
            return {...state, activeFilters:action.activeFilters};
        case RESET_FILTERS:
            return {rangeFilter:{...state.rangeFilter,fieldState:[0,50000],sliderState:[0,50000]},
                filters:state.filters.map(item=>{
                    let items = item.items.map(option=>{
                        return {...option,
                            state:false}});
                    item={...item,items:items};
                    return item;
                }),
                sortFilter:null,
                activeFilters:[],
                search:''
            };
        case SET_RANGE:
            return {...state, rangeFilter: action.values};
        case SET_OPTION:
            let filterIndex = state.filters.findIndex(item => item.category ===action.category);
            let newState = {...state, filters:[...state.filters]};
            newState.filters[filterIndex]={...newState.filters[filterIndex], items:[...newState.filters[filterIndex].items]};
            let optionIndex = newState.filters[filterIndex].items.findIndex(item => item._id ===action.optionId);
            newState.filters[filterIndex].items[optionIndex]={...newState.filters[filterIndex].items[optionIndex], state:action.state};
            return newState;
        case GET_FILTERS:
            return action.data;
        default:
            return state;
    }
};



export default FilterReducer;