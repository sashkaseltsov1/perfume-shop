import React, {useEffect} from "react";
import EditProduct from "./edit-product";
import {connect} from "react-redux";
import AccessError from "../../templates/private-routes/access-error";
import EmptyPage from "../../templates/empty-page/empty-page";
import PageNotFound from "../page-not-found/page-not-found";
import {
    createProductThunkCreator,
    getProductThunkCreator, removeProductThunkCreator,
    setInitialThunkCreator, updateProductThunkCreator
} from "../../../store/thunk-creators/product-thunks";
import {
    getFiltersThunkCreator,
    setInitialFiltersThunkCreator,
} from "../../../store/thunk-creators/filter-thunks";
import { createSelector } from 'reselect';
import {
    appendFragranceActionCreator,
    removeFragranceActionCreator,
    setAmountActionCreator,
    setBrandActionCreator,
    setCountActionCreator,
    setDescriptionActionCreator,
    setDiscountActionCreator,
    setFullpriseActionCreator,
    setGenderActionCreator, setImageActionCreator,
    setNameActionCreator,
    setNoveltyActionCreator, setTemplateActionCreator, setTypeActionCreator
} from "../../../store/action-creators/product-actions";




const EditProductContainer = ({product, role, filters,isEdit, ...props})=>{
    useEffect(()=>{
        let id = props.match.params.id;
        if(isEdit){
            props.getProductThunkCreator(id);
        } else{
            props.setTemplateActionCreator();
        }

        props.getFiltersThunkCreator();
        return ()=>{
            props.setInitialThunkCreator();
            props.setInitialFiltersThunkCreator();
        }
        // eslint-disable-next-line
    },[]);
    if(product.error){
        return <PageNotFound/>
    }
    if((!product.product && !product.error)){
        return <EmptyPage/>
    }
    return role==='Admin'?
        <EditProduct {...product} isEdit={isEdit} {...props} />:
        <AccessError/>;


};
const getProduct = state => state.product;
const getFilters = state => state.filters.filters;
const getRole = state =>state.auth.role;

const getProductWithFilters = createSelector(
    getProduct,
    getFilters,
    getRole,
    (product, filters, role)=>{
        if(product.product && filters.length>0){
            let getOptions = (opt, optFromFilters)=> {
                return optFromFilters.map(item=>{
                    let newItem={...item};
                    opt.forEach(item2=>{
                        if(item?._id===item2?._id) {
                            newItem.state=true
                        }
                    });
                    return newItem;
                })
            };
            let frag = getOptions(product.product.fragrance, filters[2].items);
            let newProduct ={
                _id:product.product._id,
                name:product.product.name,
                description:product.product.description,
                amount:product.product.amount,
                count:product.product.count,
                isDiscount:product.product.isDiscount,
                isNovelty:product.product.isNovelty,
                fullPrise:product.product.fullPrise,
                image:product.product.image,
                perfumeType:getOptions([product.product.perfumeType], filters[4].items),
                fragrance:frag,
                brand:getOptions([product.product.brand], filters[1].items),
                gender:getOptions([product.product.gender], filters[3].items),
            };

            return {product:{...product, product:newProduct}, role:role};
        }
        if(product.product){
            return {product:{
                    product:undefined,
                    isFetching:false,
                    error:undefined
                }, role:role}
        }
        return {product:product, role:role};
    }
);

export default connect(state=>getProductWithFilters(state)
, {
    setInitialThunkCreator,
    getProductThunkCreator,
    getFiltersThunkCreator,
    setInitialFiltersThunkCreator,
    setNameActionCreator,
    setAmountActionCreator,
    setDescriptionActionCreator,
    setCountActionCreator,
    setFullpriseActionCreator,
    setNoveltyActionCreator,
    setDiscountActionCreator,
    appendFragranceActionCreator,
    removeFragranceActionCreator,
    setBrandActionCreator,
    setGenderActionCreator,
    setTypeActionCreator,
    setImageActionCreator,
    createProductThunkCreator,
    updateProductThunkCreator,
    setTemplateActionCreator,
    removeProductThunkCreator
})(EditProductContainer);