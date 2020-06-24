import React, {useEffect} from "react";
import Product from "./product";
import {connect} from "react-redux";
import EmptyPage from "../../templates/empty-page/empty-page";
import PageNotFound from "../page-not-found/page-not-found";
import {
    fetchNextCommentsActionCreator,
    fetchProductActionCreator,
    setInitialActionCreator
} from "../../../store/action-creators/product-actions";
import {appendProductCartActionCreator} from "../../../store/action-creators/cart-actions";


const ProductContainer = (props)=>{
    useEffect(()=>{
        let id = props.match.params.id;
        props.fetchProductActionCreator(id);
        return ()=>props.setInitialActionCreator();
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
    fetchProductActionCreator,
    setInitialActionCreator,
    fetchNextCommentsActionCreator,
    appendProductCartActionCreator})(ProductContainer);