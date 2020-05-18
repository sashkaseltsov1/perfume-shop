import React from "react";
import Pages from "./pages";
import {connect} from "react-redux";
import {getProductsThunkCreator} from "../../../../store/actions/product-actions";


const PagesContainer = (props)=>{

    return <Pages {...props}/>
};

export default connect((state)=>({
    page:state.products.page,
    pageCount:state.products.pageCount,
}), {getProductsThunkCreator})(PagesContainer);