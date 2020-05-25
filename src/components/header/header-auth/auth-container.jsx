import React from "react";
import Auth from "./auth";
import {connect} from "react-redux";

const AuthContainer = (props)=>{
    return <Auth {...props}/>
};

export default connect((state)=>({auth:state.auth}),{})(AuthContainer);