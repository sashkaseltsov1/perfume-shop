import React from "react";
import { Route} from "react-router-dom";
import Waiting from "./waiting";
import {connect} from "react-redux";
import AccessError from "./access-error";

const RouteWithAccessError = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => {
            if(rest.isAuthorized===!rest.isInvert) {
                return <Component {...props} />}
            else
            if(rest.isAuthorized===rest.isInvert) {
                return <AccessError/>
                }else{
                return <Waiting/>
            }
        }} />
    )};

export default connect((state)=>({isAuthorized:state.auth.isAuthorized}))(RouteWithAccessError);