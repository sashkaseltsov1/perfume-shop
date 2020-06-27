import React from 'react'
import wrap from '../wrapper.module.css'
import Main from "./main/main";
import {Route, Switch} from "react-router-dom";
import Catalog from "./catalog/catalog";
import Authentication from "./authentificatin/authentication";
import PrivateRouteWithRedirect from "../templates/private-routes/route-with-redirect";
import ProfileContainer from "./profile/profile-container";
import RouteWithAccessError from "../templates/private-routes/route-with-access-error";
import OrderContainer from "./order/order-container";
import ProductContainer from "./product/product-container";
import CartContainer from "./cart/cart-container";
import Success from "./success/success";
import PageNotFound from "./page-not-found/page-not-found";
import Delivery from "./delivery/delivery";
import Payment from "./payment/payment";
import Info from "./info/info";
import Contacts from "./contacts/contacts";
import EditProductContainer from "./edit-product/edit-product-container";
import EditFilterContainer from "./edit-filter/edit-filter-container";



const Content = ()=>{
    return <div className={wrap.wrapper}>
        <Switch >
            <Route path='/' component={Main} exact />
            <Route path={'/delivery'} component={Delivery} exact/>
            <Route path={'/payment'} component={Payment} exact/>
            <Route path={'/info'} component={Info} exact/>
            <Route path={'/contacts'}  component={Contacts} exact/>
            <Route path='/shop' component={Main} exact />
            <Route path='/shop/edit-product/:id' render={(props)=><EditProductContainer {...props} isEdit={true}/>} exact />
            <Route path='/shop/create-product' render={(props)=><EditProductContainer {...props} isEdit={false}/>} exact />
            <Route path={'/shop/edit-filter/:category'} component={EditFilterContainer} exact/>
            <Route path={'/shop/catalog/'} component={Catalog} exact/>
            <Route path={'/shop/catalog/:id'} component={ProductContainer} exact/>
            <Route path={'/shop/cart'} component={CartContainer} exact/>
            <Route path={'/shop/success'} component={Success} exact/>
            <PrivateRouteWithRedirect path='/auth' component={Authentication} isInvert={true} exact/>
            <PrivateRouteWithRedirect path='/profile' component={ProfileContainer} isInvert={false} exact/>
            <RouteWithAccessError path='/orders/:id' component={OrderContainer} isInvert={false} exact/>
            <Route component={PageNotFound}/>
        </Switch>
    </div>
};

export default Content;