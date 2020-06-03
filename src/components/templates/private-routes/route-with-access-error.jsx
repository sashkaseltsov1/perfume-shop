import React from "react";
import { Route} from "react-router-dom";
import Waiting from "./waiting";
import {connect} from "react-redux";

const RouteWithAccessError = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => {
            if(rest.isAuthorized===!rest.isInvert) {
                return <Component {...props} />}
            else
            if(rest.isAuthorized===rest.isInvert) {
                return (<div style={{
                        width:'100%',
                        height:'600px',
                        'text-align':'center',
                        color:'#c12020',
                        'margin-top':'20px'
                    }}>Доступ к данному ресурсу запрещен!</div>
                )}else{
                return <Waiting/>
            }
        }} />
    )};

export default connect((state)=>({isAuthorized:state.auth.isAuthorized}))(RouteWithAccessError);