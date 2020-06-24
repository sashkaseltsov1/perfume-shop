import React, {useEffect} from "react";
import Categories from "./categories";
import {connect} from "react-redux";
import {fetchFiltersActionCreator} from "../../../../store/action-creators/filter-actions";

const CategoriesContainer = (props)=>{
    useEffect(()=>{
        props.fetchFiltersActionCreator();
        //eslint-disable-next-line
    },[]);
    return <Categories {...props}/>
};

export default connect(state=>({filters:state.filters.filters}),
    {fetchFiltersActionCreator})(CategoriesContainer);