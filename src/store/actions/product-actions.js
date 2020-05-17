import axios from "axios";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_LOADER = 'products/SET_LOADER';
const getProductsActionCreator = (data)=>{
    return {
        type:GET_PRODUCTS,
        data:data
    }
};
const setLoaderActionCreator = ()=>{
    return {
        type:SET_LOADER,
    }
};

export const getProductsThunkCreator = (queries)=>{
    return (dispatch, getState)=>{
        if(!getState().products.isLoading)
            dispatch(setLoaderActionCreator());
        axios.get('http://176.197.36.4:8000/products'+queries)
            .then(function (response) {
                dispatch(getProductsActionCreator(response.data))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {

            });
    }
};