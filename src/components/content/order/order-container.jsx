import React, {useEffect} from "react";
import Order from "./order";
import {connect} from "react-redux";
import {getOrderThunkCreator, setInitialThunkCreator} from "../../../store/thunks/order-thunks";
import EmptyPage from "../../templates/empty-page/empty-page";
import PageNotFound from "../page-not-found/page-not-found";

const OrderContainer = (props)=>{
    useEffect(()=>{
        let id = props.match.params.id;
        props.getOrderThunkCreator(id);
        return ()=>props.setInitialThunkCreator();
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

export default connect(state=>state.orderPage, {getOrderThunkCreator, setInitialThunkCreator})(OrderContainer);