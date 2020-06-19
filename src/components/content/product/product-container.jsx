import React, {useEffect} from "react";
import Product from "./product";
import {connect} from "react-redux";
import {
    addCommentThunkCreator, appendCommentsThunkCreator,
    getProductThunkCreator,
    setInitialThunkCreator
} from "../../../store/thunk-creators/product-thunks";
import {appendProductThunkCreator} from "../../../store/thunk-creators/cart-thunks";
import EmptyPage from "../../templates/empty-page/empty-page";
import PageNotFound from "../page-not-found/page-not-found";

const ProductContainer = (props)=>{
    useEffect(()=>{
        let id = props.match.params.id;
        props.getProductThunkCreator(id);
        return ()=>props.setInitialThunkCreator();
        // eslint-disable-next-line
    },[]);
    if(!props.product && !props.error ){
        return <EmptyPage/>
    } else if(props.product){
        return <Product {...props}/>
    } else{
        return <PageNotFound/>
    }

};

export default connect(state=>({
    product:state.product.product,
    error:state.product.error,
    isFetching:state.product.isFetching,
    role:state.auth.role}), {
    getProductThunkCreator,
    setInitialThunkCreator,
    addCommentThunkCreator,
    appendCommentsThunkCreator,
    appendProductThunkCreator})(ProductContainer);