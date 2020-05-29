import React, {useEffect} from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {withAuthThunk} from "../../../store/thunks/auth-thunks";
import {getUserThunkCreator, setInitialThunkCreator} from "../../../store/thunks/user-thunks";

const ProfileContainer = (props)=>{
    useEffect(()=>{
        props.withAuthThunk(getUserThunkCreator());
        return ()=>props.setInitialThunkCreator();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return <Profile {...props}/>
};
export default connect((state)=>({profile:state.profile}), {withAuthThunk, setInitialThunkCreator})(ProfileContainer);