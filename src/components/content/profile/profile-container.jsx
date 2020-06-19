import React, {useEffect} from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserThunkCreator, setInitialThunkCreator} from "../../../store/thunk-creators/user-thunks";

const ProfileContainer = (props)=>{
    
    useEffect(()=>{
        props.getUserThunkCreator();
        return ()=>props.setInitialThunkCreator();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return <Profile {...props}/>
};
export default connect((state)=>({profile:state.profile}), {getUserThunkCreator, setInitialThunkCreator})(ProfileContainer);