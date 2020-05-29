import React from "react";
import {Redirect, Route} from "react-router-dom";
import Waiting from "./waiting";
import {connect} from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
    <Route {...rest} render={(props) => {
        if(rest.isAuthorized===!rest.isInvert) {
            return <Component {...props} />}
        else
        if(rest.isAuthorized===rest.isInvert) {
            return (<Redirect to={{
            pathname: rest.isInvert? '/':'/auth',
            state: { from: props.location }
        }}/>
        )}else{
            return <Waiting/>
        }
    }} />
)};

export default connect((state)=>({isAuthorized:state.auth.isAuthorized}))(PrivateRoute);