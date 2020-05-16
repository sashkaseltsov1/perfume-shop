import React, { useRef, useState} from "react";
import styles from './filter.module.css'
import arrow from '../../../../../images/slider-arrow.svg'
import cn from 'classnames'

export const WithVisibility = (Component)=>{

    const WithVisibilityComponent = (props)=>{

        const targetRef = useRef();
        const [visibility, setVisibility] = useState(false);
        const style = {
            '--height': targetRef.current? targetRef.current.children[0].clientHeight+'px': 0
        };

        return(
            <div className={styles.main}>
                <div className={cn(styles.title, visibility && styles.titleColor)} onClick={()=>setVisibility(!visibility)}>
                    <span>{props.item && props.item.name}</span>
                    <div className={styles.imgWrapper}><img src={arrow} alt={arrow} className={cn(visibility && styles.rotateArrow )}/></div>
                </div>

                <div ref={targetRef} className={cn(styles.component, visibility && styles.show)} style={style}>
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

