import styles from './simple-filter.module.css';
import React from "react";
import check from '../../../../../images/check.svg'
import cn from 'classnames'
const SimpleFilter = (props)=>{

    return(
        <div >
            {props.item && props.item.items.map(option=>(
                <div className={styles.option} key={option._id} onClick={()=>{props.setOptionThunkCreator(props.item.category, option._id, !option.state)}}>
                    <div >
                         <img src={check} alt={check} className={cn(!option.state && styles.checked)}/>
                    </div>
                    <div ><span >{option.type}</span></div>
                </div>))}
        </div>
    )
};


export default SimpleFilter;