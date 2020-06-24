import React, {useEffect} from "react";
import ProfilePage from "./profile";
import {connect} from "react-redux";
import {RootState} from "../../../store/store";
import {Profile} from "../../../store/reducers/user-reducer";
import {RouteComponentProps } from "react-router-dom";
import {fetchUserDataActionCreator, setInitialStateActionCreator} from "../../../store/action-creators/user-actions";


interface MapStateProps {
    profile:Profile
}
interface MapDispatchProps {
    fetchUserDataActionCreator:()=>void
    setInitialStateActionCreator:()=>void

}
export type ProfileProps = MapStateProps & MapDispatchProps &RouteComponentProps;

const ProfileContainer:React.FC<ProfileProps> = (props)=>{
    useEffect(()=>{
        props.fetchUserDataActionCreator();
        return ()=>props.setInitialStateActionCreator();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return <ProfilePage {...props}/>
};
export default connect<MapStateProps, MapDispatchProps, null, RootState>
    ((state)=>({profile:state.profile}),
    {fetchUserDataActionCreator, setInitialStateActionCreator})(ProfileContainer);