import React from "react";
import {Redirect, Route} from "react-router-dom";
import Waiting from "./waiting";
import {connect} from "react-redux";

const PrivateRoute = ({ component: Component,isInvert=false, ...rest }) => {

    return(
    <Route {...rest} render={(props) => {
        console.log(rest)
        if(rest.isAuthorized===!isInvert) {
            return <Component {...props} />}
        else
        if(rest.isAuthorized===isInvert) {

            return (<Redirect to={{
            pathname: '/',
            state: { from: props.location }
        }}/>
        )}else{
            console.log('sasa'+rest.isAuthorized)
            console.log('kaka'+isInvert)
            return <Waiting/>
        }
    }} />
)};

export default connect((state)=>({isAuthorized:state.auth.isAuthorized}))(PrivateRoute);