import styles from './simple-filter.module.css';
import React from "react";

const SimpleFilter = (props)=>{
    const handleCheckbox = (item, option, state)=>{
        props.setOptionThunkCreator &&
        props.setOptionThunkCreator(item, option, !state)
    }
    return(
        <div >
            {props.item && props.item.items.map(option=>(
                <div className={styles.option} key={option._id}>
                    <div><input type="checkbox" value={option.state} onChange={
                        ()=>{handleCheckbox(props.item, option, option.state)}} />
                    </div>
                    <div ><span onClick={()=>{handleCheckbox(props.item, option, option.state)}}>{option.type}</span></div>
                </div>))}
        </div>
    )
};


export default SimpleFilter;