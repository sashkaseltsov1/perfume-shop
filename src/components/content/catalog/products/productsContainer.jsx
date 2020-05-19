import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProductsThunkCreator} from "../../../../store/actions/product-actions";
import Products from "./products";


const ProductsContainer = (props)=>{
    useEffect(()=>{
        props.getProductsThunkCreator(props.location.search);
        return props.history.listen((location) => {
            location.pathname==='/shop/catalog' &&
            props.getProductsThunkCreator(location.search, true);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <Products products={props.products}/>
    )
};

export default connect((state)=>({products:state.products}),
    {getProductsThunkCreator}
)(ProductsContainer);
