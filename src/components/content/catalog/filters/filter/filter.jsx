import React, {useState} from "react";
import styles from './filter.module.css'
import arrow from '../../../../../images/slider-arrow.svg'
import cn from 'classnames'
const Filter = ({item})=>{
    const [visibility, setVisibility] = useState(false);
    return (
        <div className={styles.main}>
            <div className={cn(styles.title, visibility && styles.titleColor)} onClick={()=>setVisibility(!visibility)}>
                <span>{item.title}</span>
                <img src={arrow} alt={arrow} className={cn(visibility && styles.rotateArrow)}/>
            </div>
            <div className={cn(!visibility && styles.show)}>
                {item.options.map(option=>(
                    <div className={styles.option} key={option.title}>
                        <div><input type="checkbox" checked={option.state} onChange={()=>{}} /></div>
                        <div><span>{option.title}</span></div>
                    </div>))}
            </div>
        </div>
    )
};
export default Filter;