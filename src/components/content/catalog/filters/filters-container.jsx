import {useMediaQuery} from "react-responsive";
import React, {useEffect, useRef} from "react";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import {connect} from "react-redux";
import Filters from "./filters";
import {
    applyFiltersActionCreator, cancelAllFiltersActionCreator,
    fetchFiltersActionCreator,
    setInitialFilterActionCreator
} from "../../../../store/action-creators/filter-actions";

const FiltersContainer = (props)=>{
    const  handleMediaQueryChange  = () => {!isTabletOrMobile && props.setFilterState(true)};

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' },undefined, handleMediaQueryChange);

    const targetRef = useRef();

    useEffect(()=>{
        if(!props.filterState) disableBodyScroll(targetRef.current, {reserveScrollBarGap: true});
        else enableBodyScroll(targetRef.current);
    }, [props.filterState]);

    useEffect(() => {
        props.fetchFiltersActionCreator();
        return props.history.listen((location) => {
            location.pathname==='/shop/catalog' && props.setInitialFilterActionCreator();
            location.pathname==='/shop/catalog' && props.fetchFiltersActionCreator();
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(() => {
        return () => {
            props.history.location.pathname!=='/shop/catalog' && props.setInitialFilterActionCreator();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return ( <Filters targetRef={targetRef}
                      isTabletOrMobile={isTabletOrMobile}
                      filterState={props.filterState}
                      setFilterState={props.setFilterState}
                      applyFiltersActionCreator={props.applyFiltersActionCreator}
                      cancelAllFiltersActionCreator={props.cancelAllFiltersActionCreator}
    />)
};

export default connect(null,{fetchFiltersActionCreator,
    applyFiltersActionCreator,
    cancelAllFiltersActionCreator,
    setInitialFilterActionCreator}) (FiltersContainer);