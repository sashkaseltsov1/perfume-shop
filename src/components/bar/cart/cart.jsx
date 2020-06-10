import React from "react";
import styles from './cart.module.css';
import cart from '../../../images/cart.svg';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const Cart = ({totalCount})=>{

    return(
        <NavLink to={'/shop/cart'} className={styles.link}>
            <div className={styles.cart}>
                <img src={cart} alt={cart}/>
                <div className={styles.number}>{totalCount}</div>
            </div>
        </NavLink>
    )
};

export default connect(state=>({totalCount:state.cart.totalCount}))(Cart);
