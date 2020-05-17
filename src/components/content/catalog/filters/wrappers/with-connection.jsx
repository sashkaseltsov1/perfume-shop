import React from "react";
import {connect} from "react-redux";
import {setOptionThunkCreator} from "../../../../../store/actions/filter-actions";



const WithConnection = (Component, id)=>{

    const WithConnectionComponent = (props)=>{
        return <Component {...props}/>
    };
    return connect(
        (state)=>({item:state.filters.filters[id]}),
        {setOptionThunkCreator})
    (WithConnectionComponent);
};

export default WithConnection;