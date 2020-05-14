import React, {useEffect, useRef, useState} from "react";
import styles from './filter.module.css'
import arrow from '../../../../../images/slider-arrow.svg'
import cn from 'classnames'


export const WithVisibility = (Component)=>{

    const WithVisibilityComponent = (props)=>{
        const [state, setState] = useState(false);
        useEffect(() => {
            console.log('mount vis')
        },[]);
        const mounted = useRef();
        useEffect(() => {
            if (!mounted.current) {
                mounted.current = true;
            } else {
                console.log('update vis')
            }
        });
        return(
            <div className={styles.main}>
                <div className={cn(styles.title, state && styles.titleColor)} onClick={()=>setState(!state)}>
                    <span>{props.item && props.item.name}</span>
                    <img src={arrow} alt={arrow} className={cn(state && styles.rotateArrow)}/>
                </div>
                <div className={cn(!state && styles.show)}>
                    <Component {...props}/>
                </div>
            </div>
        )
    };
    return WithVisibilityComponent;
};



