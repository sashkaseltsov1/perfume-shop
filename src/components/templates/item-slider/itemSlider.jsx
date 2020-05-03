import React from "react";
import styles from "./itemSlider.module.css";
import arrow from "../../../images/slider-arrow.svg";
import Item from "./item/item";

const ItemSlider = (props)=>{
    return(
        <div >
            <div className={styles.main} ref={props.mainRef} >
                <div className={styles.hideScroll} style={props.scrollBarWidth.style} />
                <div className={styles.arrowLeft} onClick={()=>props.scrollHandle(false)}><img src={arrow} alt={arrow}/></div>
                <div className={styles.arrowRight} onClick={()=>props.scrollHandle(true)}><img src={arrow} alt={arrow} /></div>
                <div className={styles.wrapper} ref={props.targetRef} >
                    <div  className={styles.items} style={{'--item-count':props.itemsCount}} >
                        { props.items.map(item=><Item item={item}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemSlider;