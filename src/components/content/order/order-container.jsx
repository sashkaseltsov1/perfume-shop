import React, {useEffect} from "react";
import Order from "./order";
import {connect} from "react-redux";
import {getOrderThunkCreator, setInitialThunkCreator} from "../../../store/thunks/order-thunks";

const OrderContainer = (props)=>{
    useEffect(()=>{
        let id = props.match.params.id;
        props.getOrderThunkCreator(id);
        return props.setInitialThunkCreator();
        // eslint-disable-next-line
    },[]);
    return <Order {...props}/>
};

export default connect(state=>state.orderPage, {getOrderThunkCreator, setInitialThunkCreator})(OrderContainer);