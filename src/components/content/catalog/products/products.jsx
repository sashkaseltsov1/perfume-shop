import React, {useEffect} from "react";
import styles from './products.module.css'
import Item from "../../../templates/item/item";
import {connect} from "react-redux";
import {getProductsThunkCreator} from "../../../../store/actions/product-actions";
import Loader from "../../../templates/loader/loader";


const Products = (props)=>{
    useEffect(()=>{
        props.getProductsThunkCreator(props.location.search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div className={styles.products}>
            {props.products.products && props.products.products.map(item => (<div key={item._id}><Item item={item}/></div>))}
            {props.products.isLoading && <Loader/>}
        </div>
    )
};

export default connect((state)=>({products:state.products}),
    {getProductsThunkCreator}
    )(Products);
