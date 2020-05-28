import React, {useEffect} from "react";
import {connect} from "react-redux";
import Products from "./products";
import {getProductsThunkCreator} from "../../../../store/thunks/product-thunks";
import {setInitialProductsThunkCreator} from "../../../../store/thunks/auth-thunks";

const ProductsContainer = (props)=>{
    useEffect(()=>{
        props.getProductsThunkCreator(props.location.search, false);
        return props.history.listen((location) => {
            props.setInitialProductsThunkCreator();
            location.pathname==='/shop/catalog' && props.getProductsThunkCreator(location.search, false);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <Products products={props.products}/>
    )
};

export default connect((state)=>({products:state.products}),
    {getProductsThunkCreator, setInitialProductsThunkCreator}
)(ProductsContainer);
