import productsApi from '../../api/products-api';
import {
    addCommentActionCreator, appendCommentsActionCreator, removeOrRestoreCommentActionCreator, setErrorActionCreator,
    setIsFetchingActionCreator,
    setProductActionCreator, setTemplateActionCreator
} from "../action-creators/product-actions";
import {SubmissionError} from "redux-form";
import {authenticate} from "./auth-thunks";




export const getProductThunkCreator = (id)=>{
    return (dispatch) =>{
        productsApi.getProduct(id, 0).then((res)=>{
            dispatch(setProductActionCreator(res.data.product))
        }).catch((err)=>{
            dispatch(setErrorActionCreator(err))
        })
    }
};

export const appendCommentsThunkCreator = (id)=>{
    return (dispatch, getState) =>{
        dispatch(setIsFetchingActionCreator(true));
        let count = getState().product.product?.comments.filter(item=>item.isRemoved===false).length||0;
        productsApi.getProduct(id, count).then((res)=>{
            dispatch(appendCommentsActionCreator(res.data.product.comments))
        }).catch((err)=>{
            console.log(err);
        }).then(()=>dispatch(setIsFetchingActionCreator(false)))
    }
};

export const addCommentThunkCreator = (productId, message, stars)=>{
    return (dispatch, getState)=>{
        let username = getState().auth?.name;
        return productsApi.addComment(productId, {
            message,
            stars,
            username
        }).then((res)=>{
            dispatch(addCommentActionCreator(res.data.comment))
        }).catch((err)=>{throw new SubmissionError({_error:err.response.data.message})})
    }
};
export const removeOrRestoreCommentThunkCreator = (productId, commentId, isRemoved)=>{
    return async (dispatch, getState) =>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            return productsApi.removeComment(productId,
                {commentId:commentId, isRemoved:isRemoved})
                .then((res)=>{
                dispatch(removeOrRestoreCommentActionCreator(res.data.commentId, res.data.isRemoved));
            }).catch((err)=>{
                alert(err.response.data.message)
            })
        }
    }
};
const getFormData = (product, file)=>{
    let bodyFormData = new FormData();
    bodyFormData.set('name',product.name);
    bodyFormData.set('description',product.description);
    bodyFormData.set('amount',product.amount);
    bodyFormData.set('count',product.count);
    bodyFormData.set('isDiscount',product.isDiscount);
    bodyFormData.set('isNovelty',product.isNovelty);
    bodyFormData.set('fullPrise',product.fullPrise);
    bodyFormData.set('perfumeType',product.perfumeType._id);
    bodyFormData.set('brand',product.brand._id);
    bodyFormData.set('gender',product.gender._id);
    product.fragrance.forEach((fr, index)=>{
        bodyFormData.set(`fragrance[${index}]`,fr._id);
    });
    bodyFormData.append('image', file);
    return bodyFormData;
};
export const createProductThunkCreator = (file)=>{
    return async (dispatch, getState) =>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            let product = getState().product.product;
            let bodyFormData = getFormData(product, file);
            dispatch(setIsFetchingActionCreator(true));
            return productsApi.createProduct(bodyFormData)
                .then((res)=>{
                    dispatch(setTemplateActionCreator());
                    alert('Продукт успешно добавлен!')
                }).catch((err)=>{
                    alert(err.response.data.message);
                    dispatch(setIsFetchingActionCreator(false));
                })
        }
    }
};
export const updateProductThunkCreator = (file)=>{
    return async (dispatch, getState) =>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            let product = getState().product.product;
            let bodyFormData = getFormData(product, file);
            dispatch(setIsFetchingActionCreator(true));
            return productsApi.updateProduct(bodyFormData, product._id)
                .then((res)=>{
                    alert('Продукт успешно обновлен!');
                }).catch((err)=>{
                    alert(err.response.data.message);
                }).then(()=>dispatch(setIsFetchingActionCreator(false)))
        }
    }
};
export const removeProductThunkCreator = (id)=>{
    return async (dispatch, getState) =>{
        await dispatch(authenticate());
        let isAuthorized = getState().auth.isAuthorized;
        if(isAuthorized){
            return productsApi.removeProduct(id)
                .then((res)=>{
                    dispatch(setErrorActionCreator('page not found'));
                    alert('Продукт успешно удалён!');
                }).catch((err)=>{
                    alert(err.response.data.message);
                })
        }
    }
};