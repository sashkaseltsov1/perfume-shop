import React, {useState} from "react";
import styles from './filter.module.css'
import arrow from '../../../../../images/slider-arrow.svg'
import cn from 'classnames'
import  { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
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
export const CostRangeFilter = ()=>{
    const [state, setState] = useState(500);

    return(
        <div>
            <textarea >{state}</textarea>
            <Range min={225} max={1000} defaultValue={[state, 800]} pushable={true}
                   onChange={(e)=>{setState(300)}}
                   trackStyle={{ backgroundColor: 'blue',
                       borderWidth:0
                   }}
                   handleStyle={{
                       cursor:'pointer',
                       boxShadow:'none',
                       backgroundColor: 'blue',
                       borderWidth:0
                   }}
                   railStyle={{ backgroundColor: 'red'}}
                   dotStyle={{
                       backgroundColor: 'blue',
                       borderWidth:0
                   }}
            />
        </div>
    )
}
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
