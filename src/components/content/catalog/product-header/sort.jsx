import styles from "./product-header.module.css";
import {connect} from "react-redux";
import React from "react";
import {applySortFilterActionCreator} from "../../../../store/action-creators/filter-actions";


const SortByPrise = ({state, applySortFilterActionCreator})=>{
    const clickHandler = ()=>{
        state==='dec' && applySortFilterActionCreator(null);
        !state && applySortFilterActionCreator('inc');
        state==='inc' && applySortFilterActionCreator('dec');
    };
    return(
        <div className={styles.costSort} onClick={clickHandler}>
            {state==='dec' && <span style={{'color':'#c12020'}}>По убыванию ↓</span>}
            {state==='inc' && <span style={{'color':'#4949e7'}}>По возрастанию ↑</span>}
            {!state && <span style={{'color':'#2c2c2c'}}>Сортировать по цене</span>}
        </div>
    )
};
export default connect((state)=>({state:state.filters.sortFilter}),
    {applySortFilterActionCreator})(SortByPrise);