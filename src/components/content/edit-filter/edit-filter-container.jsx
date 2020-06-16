import React, {useEffect} from "react";
import PageNotFound from "../page-not-found/page-not-found";
import EmptyPage from "../../templates/empty-page/empty-page";
import AccessError from "../../templates/private-routes/access-error";
import {connect} from "react-redux";
import {
    addFilterThunkCreator,
    getFilterThunkCreator,
    removeFilterThunkCreator
} from "../../../store/thunks/edit-filter-thunks";
import {setInitialActionCreator} from "../../../store/actions/edit-filter-actions";
import EditFilter from "./edit-filter";

const EditFilterContainer = ({filter,role, ...props})=>{
    useEffect(()=>{
        let category = props.match.params.category;
        props.getFilterThunkCreator(category);
        return ()=>{
            props.setInitialActionCreator();
        }
        // eslint-disable-next-line
    },[]);
    if(filter.error){
        return <PageNotFound/>
    }
    if((!filter.items && !filter.error)){
        return <EmptyPage/>
    }
    return role==='Admin'?
        <EditFilter {...filter} {...props} />:
        <AccessError/>;
};

export default connect(state=>({filter:state.editFilter, role:state.auth.role}),
    {
        getFilterThunkCreator,
        setInitialActionCreator,
        addFilterThunkCreator,
        removeFilterThunkCreator
    })(EditFilterContainer);