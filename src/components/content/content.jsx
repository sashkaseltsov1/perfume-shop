import React from 'react'
import wrap from '../wrapper.module.css'
import Main from "./main/main";
import {Route, Switch} from "react-router-dom";
import Catalog from "./catalog/catalog";
import Authentication from "./authentificatin/authentication";

const Content = ()=>{
    return <div className={wrap.wrapper}>
        <Switch>
            <Route path='/' component={Main} exact />
            <Route path='/shop' component={Main} exact />
            <Route path={'/shop/catalog/:id?'} component={Catalog} exact/>
            <Route path={'/auth'} component={Authentication} exact/>
        </Switch>

    </div>
};

export default Content