import React, {useState} from "react";
import styles from './filter.module.css'
import arrow from '../../../../../images/slider-arrow.svg'
import cn from 'classnames'



export const WithVisibility = (Component)=>{

    const WithVisibilityComponent = (props)=>{
        const [visibility, setVisibility] = useState(false);
        return(
            <div className={styles.main}>
                <div className={cn(styles.title, visibility && styles.titleColor)} onClick={()=>setVisibility(!visibility)}>
                    <span>{props.item.title}</span>
                    <img src={arrow} alt={arrow} className={cn(visibility && styles.rotateArrow)}/>
                </div>
                <div className={cn(!visibility && styles.show)}>
                    <Component {...props}/>
                </div>
            </div>
        )
    };
    return WithVisibilityComponent;
};


export const SimpleFilter = ({item})=>{
    return(
        <div >
            {item.options.map(option=>(
                <div className={styles.option} key={option.title}>
                    <div><input type="checkbox" checked={option.state} onChange={()=>{}} /></div>
                    <div><span>{option.title}</span></div>
                </div>))}
        </div>
    )
};


export default SimpleFilter;
