import React from "react";
import Pages from "./pages";
import {connect} from "react-redux";
import {fetchProductsActionCreator} from "../../../../store/action-creators/catalog-actions";



const PagesContainer = (props)=>{
    return <Pages {...props}/>
};

export default connect((state)=>({
    page:state.products.page,
    pageCount:state.products.pageCount,
}), {fetchProductsActionCreator})(PagesContainer);