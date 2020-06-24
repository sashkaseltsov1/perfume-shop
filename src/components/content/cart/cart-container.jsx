import React from "react";
import Cart from "./cart";
import {connect} from "react-redux";
import {initCartActionCreator, removeProductCartActionCreator} from "../../../store/action-creators/cart-actions";

const CartContainer = (props)=>{

    return <Cart {...props}/>
};

export default connect(state=>state.cart,
    {removeProductCartActionCreator, initCartActionCreator})(CartContainer);