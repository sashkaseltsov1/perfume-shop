import React, {useEffect} from "react";
import Categories from "./categories";
import {connect} from "react-redux";
import {getFiltersThunkCreator} from "../../../../store/thunk-creators/filter-thunks";

const CategoriesContainer = (props)=>{
    useEffect(()=>{
        props.getFiltersThunkCreator();
        //eslint-disable-next-line
    },[]);
    return <Categories {...props}/>
};

export default connect(state=>({filters:state.filters.filters}), {getFiltersThunkCreator})(CategoriesContainer);