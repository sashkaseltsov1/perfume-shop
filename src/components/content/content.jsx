import React from 'react'
import wrap from '../wrapper.module.css'
import Main from "./main/main";
import Catalog from "./catalog/catalog";
import {Route, Switch} from "react-router-dom";

const Content = ()=>{
    return <div className={wrap.wrapper}>
        <Switch>
            <Route path='/' component={Main} exact />
            <Route path='/shop' component={Main} exact />
            <Route path={'/shop/catalog'} component={Catalog}/>
        </Switch>
    </div>
}

export default Content