import React, {useEffect} from "react";
import ProfilePage from "./profile";
import {connect} from "react-redux";
import {getUserThunkCreator} from "../../../store/thunk-creators/user-thunks";
import {RootState} from "../../../store/store";
import {Profile} from "../../../store/reducers/user-reducer";
import {RouteComponentProps } from "react-router-dom";
import {setInitialStateActionCreator} from "../../../store/action-creators/user-actions";


interface MapStateProps {
    profile:Profile
}
interface MapDispatchProps {
    getUserThunkCreator:()=>void
    setInitialStateActionCreator:()=>void
}
export type ProfileProps = MapStateProps & MapDispatchProps &RouteComponentProps;

const ProfileContainer:React.FC<ProfileProps> = (props)=>{
    useEffect(()=>{
        props.getUserThunkCreator();
        return ()=>props.setInitialStateActionCreator();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return <ProfilePage {...props}/>
};
export default connect<MapStateProps, MapDispatchProps, null, RootState>
    ((state)=>({profile:state.profile}),
    {getUserThunkCreator, setInitialStateActionCreator})(ProfileContainer);