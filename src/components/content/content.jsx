import React from 'react'
import wrap from '../wrapper.module.css'
import Main from "./main/main";
import {Route, Switch} from "react-router-dom";
import Catalog from "./catalog/catalog";
import Authentication from "./authentificatin/authentication";
import PrivateRoute from "../templates/private-route/private-route";
import ProfileContainer from "./profile/profile-container";


const Content = ()=>{

    return <div className={wrap.wrapper}>
        <Switch>
            <Route path='/' component={Main} exact />
            <Route path='/shop' component={Main} exact />
            <Route path={'/shop/catalog/:id?'} component={Catalog} exact/>
            <PrivateRoute path='/auth' component={Authentication} isInvert={true} exact/>
            <PrivateRoute path='/profile' component={ProfileContainer} isInvert={false} exact/>
            {/*<Route path='/profile' component={ProfileContainer} exact/>*/}
        </Switch>

    </div>
};

export default Content;