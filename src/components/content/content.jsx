import React from 'react'
import wrap from '../wrapper.module.css'
import Main from "./main/main";
import {Route, Switch} from "react-router-dom";
import Catalog from "./catalog/catalog";
import Authentication from "./authentificatin/authentication";
import PrivateRouteWithRedirect from "../templates/private-routes/route-with-redirect";
import ProfileContainer from "./profile/profile-container";
import RouteWithAccessError from "../templates/private-routes/route-with-access-error";


const Content = ()=>{

    return <div className={wrap.wrapper}>
        <Switch>
            <Route path='/' component={Main} exact />
            <Route path='/shop' component={Main} exact />
            <Route path={'/shop/catalog/:id?'} component={Catalog} exact/>
            <PrivateRouteWithRedirect path='/auth' component={Authentication} isInvert={true} exact/>
            <PrivateRouteWithRedirect path='/profile' component={ProfileContainer} isInvert={false} exact/>
            <RouteWithAccessError path='/orders/:id' component={ProfileContainer} isInvert={false} exact/>
        </Switch>

    </div>
};

export default Content;