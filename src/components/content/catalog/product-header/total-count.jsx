import styles from "./product-header.module.css";
import {connect} from "react-redux";
import React from "react";

const TotalCount = ({count})=>{
    return <div className={styles.count}><span>Найдено товаров: </span><span>{count}</span></div>
};
export default connect((state)=>({count:state.products.count}))(TotalCount);