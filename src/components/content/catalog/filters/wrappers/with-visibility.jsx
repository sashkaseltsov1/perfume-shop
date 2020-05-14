import React, {useEffect, useRef, useState} from "react";
import styles from './filter.module.css'
import arrow from '../../../../../images/slider-arrow.svg'
import cn from 'classnames'


export const WithVisibility = (Component)=>{

    const WithVisibilityComponent = (props)=>{

        const targetRef = useRef()
        const [visibility, setVisibility] = useState({state:false, style:{}});

        const clickHandler = ()=>{
            if(visibility.state)
                setVisibility({state:false, style:{}});
            else
                setVisibility({state:true, style:{height:targetRef.current?.children[0].clientHeight}})
        }



        return(
            <div className={styles.main}>
                <div className={cn(styles.title, visibility.state && styles.titleColor)} onClick={()=>clickHandler()}>
                    <span>{props.item && props.item.name}</span>
                    <div className={styles.imgWrapper}><img src={arrow} alt={arrow} className={cn(visibility.state && styles.rotateArrow )}/></div>
                </div>

                <div ref={targetRef} className={cn(styles.component)} style={visibility.style}>
                    <Component {...props} />
                </div>
            </div>
        )
    };
    return WithVisibilityComponent;
};

/*useEffect(() => {
    console.log('mount vis')
},[]);
const mounted = useRef();
useEffect(() => {
    if (!mounted.current) {
        mounted.current = true;
    } else {
        console.log('update vis')
    }
});*/

