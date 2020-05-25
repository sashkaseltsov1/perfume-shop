import React from "react";
import styles from './auth.module.css'
import {NavLink} from "react-router-dom";
import login from '../../../images/login.svg'
import user from '../../../images/user.svg'
const Auth = (props)=>{
  return (
      <div className={styles.auth}>
          {props.auth.isAuthorized===false && <NavLink to={'/auth'} ><img src={login} alt={login}/><span>Войти</span></NavLink>}
          {props.auth.isAuthorized===true && <NavLink to={'/profile'} ><img src={user} alt={user}/></NavLink>}
      </div>
  )
};

export default Auth;