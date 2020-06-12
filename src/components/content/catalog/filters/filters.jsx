import React from "react";
import styles from './filters.module.css'
import close from '../../../../images/close-white.svg'
import cn from 'classnames'

import { WithVisibility} from "./wrappers/with-visibility";


import SimpleFilter from "./items/simple-filter";
import WithConnection from "./wrappers/with-connection";
import {connect} from "react-redux";

import SliderWithTwoHandles from "./items/sliderWithTwoHandles";
import {setRangeOptionThunkCreator} from "../../../../store/thunks/filter-thunks";

const Filters = (props)=>{
    const getScrollbarWidth = ()=> {
        return window.innerWidth - document.documentElement.clientWidth;
    };
    const Slider = connect((state)=>({item:state.filters.rangeFilter}),
        {setRangeOptionThunkCreator})(WithVisibility(SliderWithTwoHandles));
    return (
        <div className={cn(styles.filters, (props.isTabletOrMobile && props.filterState &&  styles.hideFilters))}
             ref={props.targetRef}
             style={{'--scroll-bar-width': getScrollbarWidth()+'px'}}>
            <div ><img src={close} alt={close} onClick={()=>{props.setFilterState(true)}}/></div>
            <Slider />
            {[0,1,2,3,4].map(index=>{
                    let Filter = WithConnection(WithVisibility(SimpleFilter), index);
                    return <Filter key={index}/>})}

            <button className={styles.filterButton}
                 onClick={()=>{
                     props.isTabletOrMobile && props.setFilterState(true);
                     props.filterThunkCreator()}}>
                Фильтровать
            </button>
            <div className={styles.reset} onClick={()=>{
                props.isTabletOrMobile && props.setFilterState(true);
                props.resetFiltersThunkCreator()}}>
                Сбросить фильтры
            </div>

            <div className={styles.padding}/>
        </div>
    )
};

export default Filters;
