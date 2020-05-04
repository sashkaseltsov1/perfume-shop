import React from "react";
import { useHistory } from "react-router-dom";
import styles from './categoryButton.module.css'

const CategoryButton = (props)=>{
    const url = props.url? props.url:'';
    const history = useHistory();

    return(
        <div className={styles.button} onClick={()=>history.push('/shop/catalog'+url)} >
            <div className={styles.image}><img src={props.image} alt={props.image} /></div>
            <div className={styles.title} style={{'--bg-color':props.bgColor}}>{props.name}</div>
        </div>
    )
}

export default CategoryButton
