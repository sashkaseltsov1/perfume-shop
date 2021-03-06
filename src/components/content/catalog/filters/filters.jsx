import React from "react";
import styles from './filters.module.css'
import close from '../../../../images/close-white.svg'
import cn from 'classnames'
import { WithVisibility} from "./wrappers/with-visibility";
import SimpleFilter from "./items/simple-filter";
import WithConnection from "./wrappers/with-connection";
import {connect} from "react-redux";
import SliderWithTwoHandles from "./items/sliderWithTwoHandles";
import Button from "../../../templates/button/button";
import {setRangeOptionActionCreator} from "../../../../store/action-creators/filter-actions";

const Filters = (props)=>{
    const getScrollbarWidth = ()=> {
        return window.innerWidth - document.documentElement.clientWidth;
    };
    const Slider = connect((state)=>({item:state.filters.rangeFilter}),
        {setRangeOptionActionCreator})(WithVisibility(SliderWithTwoHandles));
    return (
        <div className={cn(styles.filters, (props.isTabletOrMobile && props.filterState &&  styles.hideFilters))}
             ref={props.targetRef}
             style={{'--scroll-bar-width': getScrollbarWidth()+'px'}}>
            <div ><img src={close} alt={close} onClick={()=>{props.setFilterState(true)}}/></div>
            <Slider />
            {[0, 1, 2, 3, 4].map(index => {
                let Filter = WithConnection(WithVisibility(SimpleFilter), index);
                return <Filter key={index}/>
            })}
            <div className={styles.button}>
                <Button title={'Фильтровать'} callback={() => {
                    props.isTabletOrMobile && props.setFilterState(true);
                    props.applyFiltersActionCreator()
                }}/>
            </div>

            <div className={styles.reset} onClick={()=>{
                props.isTabletOrMobile && props.setFilterState(true);
                props.cancelAllFiltersActionCreator()}}>
                Сбросить фильтры
            </div>

            <div className={styles.padding}/>
        </div>
    )
};

export default Filters;
