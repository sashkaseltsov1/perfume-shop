import React, {forwardRef, Suspense, useEffect, useRef} from "react";
import styles from './filters.module.css'
import close from '../../../../images/close.svg'
import cn from 'classnames'
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import {useMediaQuery} from "react-responsive";
import { WithVisibility} from "./wrappers/with-visibility";
import {connect} from "react-redux";

import {
    getFiltersThunkCreator,
} from "../../../../store/reducers/filter-reducer";
import SimpleFilter from "../../../templates/simpleFilter/simple-filter";
import WithConnection from "./wrappers/with-connection";



const costRangeFilter = {
    title:'Цена, руб.',
    domain:[200, 18000],
    default:[200, 18000]
};

const arr=[
    {
        title:'Особые предложения',
        options:[
            {
                title:'Новинки',
                state:true
            },
            {
                title:'Скидки',
                state:false
            },
        ]
    },
];

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

    /*const Slider = WithVisibility(SliderWithTwoHandles);*/
    useEffect(() => {
        props.getFiltersThunkCreator();
    },[]);

    return (
        <div className={cn(styles.filters, (isTabletOrMobile && props.filterState &&  styles.hideFilters))}
             ref={targetRef}
             style={{'--scroll-bar-width': getScrollbarWidth()+'px'}}>
            <div ><img src={close} alt={close} onClick={()=>props.setFilterState(true)}/></div>
            {[0,1,2,3,4].map(index=>{
                    let Filter = WithConnection(WithVisibility(SimpleFilter), index);
                    return <Filter/>})}
            {/*<Slider item={costRangeFilter} />*/}
            <div className={styles.filterButton} onClick={()=>{}}>Фильтровать</div>


            <div className={styles.padding}/>
        </div>
    )
};

export default connect(null,
    {getFiltersThunkCreator})(Filters);
