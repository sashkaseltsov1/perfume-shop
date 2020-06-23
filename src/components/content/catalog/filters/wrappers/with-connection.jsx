import React from "react";
import {connect} from "react-redux";
import {setOptionActionCreator} from "../../../../../store/action-creators/filter-actions";





const WithConnection = (Component, id)=>{

    const WithConnectionComponent = (props)=>{
        return <Component {...props}/>
    };
    return connect(
        (state)=>({item:state.filters.filters[id]}),
        {setOptionActionCreator})
    (WithConnectionComponent);
};

export default WithConnection;