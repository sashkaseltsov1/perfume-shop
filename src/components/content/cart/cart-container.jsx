import React from "react";
import Cart from "./cart";
import {connect} from "react-redux";
import {removeProductThunkCreator, setCartThunkCreator} from "../../../store/thunks/cart-thunks";


const CartContainer = (props)=>{
    return <Cart {...props}/>
};

export default connect(state=>state.cart, {removeProductThunkCreator, setCartThunkCreator})(CartContainer);