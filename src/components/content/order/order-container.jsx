import React, {useEffect} from "react";
import Order from "./order";
import {connect} from "react-redux";
import {getOrderThunkCreator} from "../../../store/thunk-creators/order-thunks";
import EmptyPage from "../../templates/empty-page/empty-page";
import PageNotFound from "../page-not-found/page-not-found";
import {setInitialActionCreator} from "../../../store/action-creators/order-actions";

const OrderContainer = (props)=>{
    useEffect(()=>{
        let id = props.match.params.id;
        props.getOrderThunkCreator(id);
        return ()=>props.setInitialActionCreator();
        // eslint-disable-next-line
    },[]);
    if(!props.order && !props.error ){
        return <EmptyPage/>
    } else if(props.order){
        return <Order {...props}/>
    } else{
        return <PageNotFound/>
    }
};

export default connect(state=>state.orderPage,
    {getOrderThunkCreator, setInitialActionCreator})(OrderContainer);