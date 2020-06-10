import React from "react";
import styles from './bar.module.css';
import cn from 'classnames';
import wrapper from '../wrapper.module.css';
import Cart from "./cart/cart";
import Search from "./search/search";


const Bar = ()=>{
    return(
        <div className={cn(styles.bar, wrapper.wrapper)}>
            <Search/>
            <Cart/>

        </div>
    )
};

export default Bar;
