import React, { useEffect, useRef} from "react";
import styles from './filters.module.css'
import close from '../../../../images/close.svg'
import cn from 'classnames'
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import {useMediaQuery} from "react-responsive";
import { WithVisibility} from "./wrappers/with-visibility";
import {connect} from "react-redux";
import {
    filterThunkCreator, getFiltersThunkCreator, resetFiltersThunkCreator, setRangeOptionThunkCreator,
} from "../../../../store/reducers/filter-reducer";
import SimpleFilter from "../../../templates/simpleFilter/simple-filter";
import WithConnection from "./wrappers/with-connection";
import SliderWithTwoHandles from "./sliderWithTwoHandles";







const Filters = (props)=>{
    const  handleMediaQueryChange  = () => {!isTabletOrMobile && props.setFilterState(true)};

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' },undefined, handleMediaQueryChange);

    const targetRef = useRef();

    const getScrollbarWidth = ()=> {
        return window.innerWidth - document.documentElement.clientWidth;
    };

    useEffect(()=>{
        if(!props.filterState) disableBodyScroll(targetRef.current, {reserveScrollBarGap: true});
        else enableBodyScroll(targetRef.current);
    }, [props.filterState]);

    const Slider = connect((state)=>({item:state.filters.rangeFilter}), {setRangeOptionThunkCreator})(WithVisibility(SliderWithTwoHandles));
    useEffect(() => {
        props.getFiltersThunkCreator();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div className={cn(styles.filters, (isTabletOrMobile && props.filterState &&  styles.hideFilters))}
             ref={targetRef}
             style={{'--scroll-bar-width': getScrollbarWidth()+'px'}}>
            <div ><img src={close} alt={close} onClick={()=>props.setFilterState(true)}/></div>
            <Slider />
            {[0,1,2,3,4].map(index=>{
                    let Filter = WithConnection(WithVisibility(SimpleFilter), index);
                    return <Filter key={index}/>})}

            <div className={styles.filterButton} onClick={()=>{props.filterThunkCreator()}}>Фильтровать</div>
            <div onClick={()=>{props.resetFiltersThunkCreator()}}>Reset</div>

            <div className={styles.padding}/>
        </div>
    )
};

export default connect(null,{getFiltersThunkCreator, filterThunkCreator, resetFiltersThunkCreator}) (Filters);
