const axios = require('axios');

const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
const GET_PRODUCTS = 'GET_PRODUCTS';
const ProductReducer = (state={}, action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return action.data;
        default:
            return state;
    }
};

const getProductsActionCreator = (data)=>{
    return {
        type:GET_PRODUCTS,
        data:data
    }
};

export const getProductsThunkCreator = (queries)=>{
    return (dispatch)=>{

        axios.get('http://176.197.36.4:8000/products'+queries)
            .then(function (response) {
                dispatch(getProductsActionCreator(response.data))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                console.log('always')
            });
    }
};

export default ProductReducer;