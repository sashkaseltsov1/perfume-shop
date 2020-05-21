import React from "react";
import styles from './auth.module.css'
import {NavLink} from "react-router-dom";
import login from '../../../images/login.svg'
import user from '../../../images/user.svg'
const Auth = ({status})=>{
  return (
      <div className={styles.auth}>
          {!status && <NavLink to={'/auth'} ><img src={login} alt={login}/><span>Войти</span></NavLink>}
          {status && <NavLink to={'/profile'} ><img src={user} alt={user}/></NavLink>}
      </div>
  )
};

export default Auth;