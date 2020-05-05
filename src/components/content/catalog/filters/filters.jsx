import React, {useEffect, useRef} from "react";
import styles from './filters.module.css'
import close from '../../../../images/close.svg'
import cn from 'classnames'
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import {useMediaQuery} from "react-responsive";
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

    return (
        <div className={cn(styles.filters, (isTabletOrMobile && props.filterState &&  styles.hideFilters))}
             ref={targetRef}
             style={{'--scroll-bar-width': getScrollbarWidth()+'px'}}>
            <div ><img src={close} alt={close} onClick={()=>props.setFilterState(true)}/></div>
            <div>ыфыф</div>
            <div>ыфыф</div>
            <div>ыфыф</div>
            <div>ыфыф</div>
        </div>
    )
};

export default Filters;