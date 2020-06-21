import React, {useEffect} from "react";
import {connect} from "react-redux";
import Products from "./products";
import {getProductsThunkCreator, setInitialProductsThunkCreator} from "../../../../store/thunk-creators/catalog-thunks";
import {RootState} from "../../../../store/store";
import {Catalog} from "../../../../store/reducers/catalog-reducer";
import {RouteComponentProps} from "react-router-dom";


interface MapStateProps {
    products:Catalog
}
interface MapDispatchProps {
    getProductsThunkCreator:(queries:string, isPushNewQuery:boolean)=>void
    setInitialProductsThunkCreator:()=>void
}
type Props = MapStateProps & MapDispatchProps & RouteComponentProps
const ProductsContainer:React.FC<Props> = (props)=>{
    useEffect(()=>{
        props.getProductsThunkCreator(props.location.search, false);
        return props.history.listen((location) => {
            // @ts-ignore
            location.pathname==='/shop/catalog' &&props.setInitialProductsThunkCreator();
            // @ts-ignore
            location.pathname==='/shop/catalog' && props.getProductsThunkCreator(location.search, false);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(()=>{
        return ()=>{
            props.history.location.pathname!=='/shop/catalog' &&props.setInitialProductsThunkCreator();}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <Products products={props.products}/>
    )
};

export default connect<MapStateProps, MapDispatchProps, RouteComponentProps, RootState>
    ((state)=>({products:state.products}),
    {getProductsThunkCreator, setInitialProductsThunkCreator}
)(ProductsContainer);
