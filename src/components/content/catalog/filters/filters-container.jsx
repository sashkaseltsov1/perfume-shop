import {useMediaQuery} from "react-responsive";
import React, {useEffect, useRef} from "react";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import {connect} from "react-redux";
import Filters from "./filters";
import {
    filterThunkCreator,
    getFiltersThunkCreator,
    resetFiltersThunkCreator, setInitialFiltersThunkCreator
} from "../../../../store/thunk-creators/filter-thunks";

const FiltersContainer = (props)=>{
    const  handleMediaQueryChange  = () => {!isTabletOrMobile && props.setFilterState(true)};

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' },undefined, handleMediaQueryChange);

    const targetRef = useRef();

    useEffect(()=>{
        if(!props.filterState) disableBodyScroll(targetRef.current, {reserveScrollBarGap: true});
        else enableBodyScroll(targetRef.current);
    }, [props.filterState]);

    useEffect(() => {
        props.getFiltersThunkCreator();
        return props.history.listen((location) => {
            props.setInitialFiltersThunkCreator();
            location.pathname==='/shop/catalog' && props.getFiltersThunkCreator();
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return ( <Filters targetRef={targetRef}
                      isTabletOrMobile={isTabletOrMobile}
                      filterState={props.filterState}
                      setFilterState={props.setFilterState}
                      filterThunkCreator={props.filterThunkCreator}
                      resetFiltersThunkCreator={props.resetFiltersThunkCreator}
    />)
};

export default connect(null,{getFiltersThunkCreator,
    filterThunkCreator,
    resetFiltersThunkCreator,
    setInitialFiltersThunkCreator}) (FiltersContainer);