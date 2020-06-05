import React, {useEffect} from "react";
import Product from "./product";
import {connect} from "react-redux";
import {
    addCommentThunkCreator, appendCommentsThunkCreator,
    getProductThunkCreator,
    setInitialThunkCreator
} from "../../../store/thunks/product-thunks";

const ProductContainer = (props)=>{
    useEffect(()=>{
        let id = props.match.params.id;
        props.getProductThunkCreator(id);
        return ()=>props.setInitialThunkCreator();
        // eslint-disable-next-line
    },[]);
    return <Product {...props}/>
};

export default connect(state=>state.product, {
    getProductThunkCreator,
    setInitialThunkCreator,
    addCommentThunkCreator,
    appendCommentsThunkCreator})(ProductContainer);