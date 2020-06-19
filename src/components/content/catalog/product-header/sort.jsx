import styles from "./product-header.module.css";
import {connect} from "react-redux";
import React from "react";
import {setSortFilterThunkCreator} from "../../../../store/thunk-creators/filter-thunks";


const SortByPrise = ({state, setSortFilterThunkCreator})=>{
    const clickHandler = ()=>{
        state==='dec' && setSortFilterThunkCreator(null);
        !state && setSortFilterThunkCreator('inc');
        state==='inc' && setSortFilterThunkCreator('dec');
    };
    return(
        <div className={styles.costSort} onClick={clickHandler}>
            {state==='dec' && <span style={{'color':'#c12020'}}>По убыванию ↓</span>}
            {state==='inc' && <span style={{'color':'#4949e7'}}>По возрастанию ↑</span>}
            {!state && <span style={{'color':'#2c2c2c'}}>Сортировать по цене</span>}
        </div>
    )
};
export default connect((state)=>({state:state.filters.sortFilter}), {setSortFilterThunkCreator})(SortByPrise);