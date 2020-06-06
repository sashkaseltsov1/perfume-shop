import React from "react";
import styles from './bar.module.css';
import cn from 'classnames';
import wrapper from '../wrapper.module.css';

import Cart from "./cart/cart";

const Bar = ()=>{
    return(
        <div className={cn(styles.bar, wrapper.wrapper)}>
                <Cart/>

        </div>
    )
};

export default Bar;
