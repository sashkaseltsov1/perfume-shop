import React from "react";
import {connect} from "react-redux";
import styles from './active-filters.module.css'
import close from '../../../../images/close-white.svg'
import {abortActiveFilterThunkCreator} from "../../../../store/thunk-creators/filter-thunks";



const ActiveFilters = (props)=>{
    return (
        <div className={styles.activeFilters}>
            {props.activeFilters?.map(item=>
                <div className={styles.option} key={item.optionId}
                     onClick={()=>{props.abortActiveFilterThunkCreator(item.category, item.optionId, false)}}>
                    {item.type}
                    <img src={close} alt={close}/>
                </div>)}
        </div>
    )
};

export default connect( (state)=>({activeFilters:state.filters.activeFilters}), {abortActiveFilterThunkCreator})(ActiveFilters);
