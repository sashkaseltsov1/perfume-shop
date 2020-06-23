import React, {useEffect} from "react";
import {connect} from "react-redux";
import Products from "./products";
import {getProductsThunkCreator} from "../../../../store/thunk-creators/catalog-thunks";
import {RootState} from "../../../../store/store";
import {Catalog} from "../../../../store/reducers/catalog-reducer";
import {RouteComponentProps} from "react-router-dom";
import {setInitialProductsActionCreator} from "../../../../store/action-creators/catalog-actions";


interface MapStateProps {
    products:Catalog
}
interface MapDispatchProps {
    getProductsThunkCreator:(queries:string, isPushNewQuery:boolean)=>void
    setInitialProductsActionCreator:()=>void
}
type Props = MapStateProps & MapDispatchProps & RouteComponentProps
const ProductsContainer:React.FC<Props> = (props)=>{
    useEffect(()=>{
        props.getProductsThunkCreator(props.location.search, false);
        return props.history.listen((location) => {
            // @ts-ignore
            location.pathname==='/shop/catalog' &&props.setInitialProductsActionCreator();
            // @ts-ignore
            location.pathname==='/shop/catalog' && props.getProductsThunkCreator(location.search, false);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(()=>{
        return ()=>{
            props.history.location.pathname!=='/shop/catalog' && props.setInitialProductsActionCreator();}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <Products products={props.products}/>
    )
};

export default connect<MapStateProps, MapDispatchProps, RouteComponentProps, RootState>
    ((state)=>({products:state.products}),
    {getProductsThunkCreator, setInitialProductsActionCreator}
)(ProductsContainer);
