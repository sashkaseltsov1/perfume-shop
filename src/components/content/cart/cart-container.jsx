import React from "react";
import Cart from "./cart";
import {connect} from "react-redux";
import {removeProductThunkCreator, setCartThunkCreator} from "../../../store/thunk-creators/cart-thunks";
import {authenticate} from "../../../store/thunk-creators/auth-thunks";


const CartContainer = (props)=>{

    return <Cart {...props}/>
};

export default connect(state=>state.cart, {removeProductThunkCreator, setCartThunkCreator, authenticate})(CartContainer);