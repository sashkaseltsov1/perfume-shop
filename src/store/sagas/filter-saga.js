import {call, put, all, takeLatest, select} from "redux-saga/effects";

import instance from "../../api/filters-api";
import {createBrowserHistory} from "history";
import {
    applyFiltersActionCreator,
    getFiltersActionCreator, resetFiltersActionCreator,
    setActiveFiltersActionCreator,
    setOptionActionCreator, setSortFilterActionCreator
} from "../action-creators/filter-actions";
import {
    ABORT_ACTIVE_FILTER,
    APPLY_FILTERS,
    APPLY_SORT_FILTER,
    CANCEL_ALL_FILTERS,
    FETCH_FILTERS
} from "../reducers/filter-reducer";
import {fetchProductsActionCreator} from "../action-creators/catalog-actions";

const parseQueryString = (queryString)=>{
    const getIds = (string, array)=>{
        let arr=[];
        array.forEach(item=>{
            let regexp = new RegExp(item+'=[a-zA-Z0-9%]+');
            let temp = string.match(regexp);
            if(temp) {
                regexp = new RegExp(`[^${item}=][a-zA-Z0-9%]+`);
                temp=temp[0].match(regexp);
                if(temp){
                    temp = temp[0].split('%7C');
                    arr=[...arr, ...temp];}}});
        return arr;
    };
    let options = getIds(queryString, ['brand', 'perfumeType', 'fragrance', 'gender']);
    let isNovelty = queryString.match(/isNovelty/);
    let isDiscount = queryString.match(/isDiscount/);
    let min = queryString.match(/min=[0-9]+/);
    let max = queryString.match(/max=[0-9]+/);
    let sort = queryString.match(/sort=((inc)|(dec))/);
    let find = queryString.match(/find=[a-zA-Zа-яА-Я0-9]+/);
    if(isNovelty) options.push('isNovelty');
    if(isDiscount) options.push('isDiscount');
    let minRange = 0;
    if(min){
        let minMatchArray = min[0].match(/[^min=][0-9]+/);
        minRange=minMatchArray? minMatchArray[0]:0
    }
    let maxRange = 50000;
    if(max){
        let maxMatchArray = max[0].match(/[^max=][0-9]+/);
        maxRange=maxMatchArray? maxMatchArray[0]:50000
    }
    let sortSwitch=null;
    if(sort){
        let sortMatchArray = sort[0].match(/[^sort=][a-z]+/);
        sortSwitch = sortMatchArray && sortMatchArray[0]==='inc'?sortMatchArray[0]:null
    }
    let findStr = '';
    if(find){
        let findMatchArray = find[0].match(/[^find=][а-яА-Яa-zA-Z0-9]+/);
        findStr = findMatchArray?findMatchArray[0]:''
    }
    return [options, [minRange,maxRange], sortSwitch, findStr];
};
export function* fetchFilters() {
    try {
        let response = yield call(instance.getFilters);
        let history = createBrowserHistory();
        let [categories, ranges, sort, search] = parseQueryString(history.location.search);
        let activeFilters = [];
        let data = response.data.filters.map(item=>{
            let items = item.items.map(option=>{
                let optionState = categories.includes(option._id);
                let newOption = {...option,state:optionState};
                if(optionState) activeFilters.push({category:item.category, optionId:newOption._id, type:option.type});
                return newOption});
            return {...item,items:items};
        });
        let rangeFilter = {
            name:'Цена, руб.',
            domain:[0, 50000],
            sliderState:ranges,
            fieldState:ranges
        };
        yield put(getFiltersActionCreator({
                filters:data,
                rangeFilter:rangeFilter,
                activeFilters:activeFilters,
                sortFilter:sort,
                search:search
            })
        );
    }catch (e) { }
}
const joinStateToQueryString = (state)=>{
    let newState = state.filters.map(prm=>
        ({category:prm.category, params:prm.items.filter(p=>
                p.state).map(p=>
                p._id)})).filter(arr=>arr.params.length>0);
    let offers = newState.find(item=>item.category==='specialOffers')?.
    params.map(offer=>({category:offer, params:[true]}));
    if(offers){
        newState =  newState.filter(item=>item.category!=='specialOffers');
        newState = [...offers, ...newState];
    }
    newState = newState.map(item=>(item.category+'='+item.params.join('%7C')));
    let rangeFilterState = state.rangeFilter;
    if(rangeFilterState.fieldState[0]!==rangeFilterState.domain[0])
        newState.push('min='+rangeFilterState.fieldState[0]);
    if(rangeFilterState.fieldState[1]!==rangeFilterState.domain[1])
        newState.push('max='+rangeFilterState.fieldState[1]);
    if(state.sortFilter) newState.push('sort='+state.sortFilter);
    if(state.search) newState.push('find='+state.search);
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
export function* applyFilters() {
    let state = yield select();
    let filterState = state.filters;
    if(!filterState.isInitial)
    {
        let queryString = joinStateToQueryString(filterState);
        let activeFilters = initializeActiveFilters(filterState.filters);
        yield put(setActiveFiltersActionCreator(activeFilters));
        yield put(fetchProductsActionCreator(queryString))
    }
}
export function* abortActiveFilter({category, optionId, state}) {
    yield put(setOptionActionCreator(category, optionId, state));
    yield put(applyFiltersActionCreator());
}
export function* cancelAllFilters() {
    yield put(resetFiltersActionCreator());
    yield put(fetchProductsActionCreator('?'));
}
export function* applySortFilter({value}) {
    yield put(setSortFilterActionCreator(value));
    yield put(applyFiltersActionCreator());
}
export function* watchFetchFiltersSaga() {
    yield takeLatest(FETCH_FILTERS, fetchFilters);
}
export function* watchApplyFiltersSaga() {
    yield takeLatest(APPLY_FILTERS, applyFilters);
}
export function* watchAbortActiveFilterSaga() {
    yield takeLatest(ABORT_ACTIVE_FILTER, abortActiveFilter);
}
export function* watchCancelAllFiltersSaga() {
    yield takeLatest(CANCEL_ALL_FILTERS, cancelAllFilters);
}
export function* watchApplySortFilterSaga() {
    yield takeLatest(APPLY_SORT_FILTER, applySortFilter);
}
export default function* filterSaga() {
    yield all([
        watchFetchFiltersSaga(),
        watchApplyFiltersSaga(),
        watchAbortActiveFilterSaga(),
        watchCancelAllFiltersSaga(),
        watchApplySortFilterSaga()
    ])
}