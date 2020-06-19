import axios from 'axios'
import config from '../config/config';

const instance = axios.create({
    baseURL: `${config.apiUrl}api/products`,
});

export default {
    createProduct:(data) =>instance.post('/',data,
        {withCredentials:true, headers:{
                'Authorization': localStorage.token,
                'Content-Type': 'multipart/form-data;boundary=boundary'
            }}),
    updateProduct:(data, id) =>{
        return instance.put('/'+id,data,
        {withCredentials:true, headers:{
                'Authorization': localStorage.token,
                'Content-Type': 'multipart/form-data;boundary=boundary'
            }})},
    getProducts: params =>instance.get(params),
    getProduct: (id, count) =>instance.get(`/${id}?count=${count}`),
    addComment:(id,data) =>instance.post(`/${id}`,data),
    removeComment:(id,data) =>instance.put(`/remove-restore-comment/${id}`,data,
        {withCredentials:true, headers:{'Authorization': localStorage.token}}),
    removeProduct:(id) =>instance.delete(`/${id}`,
        {withCredentials:true, headers:{'Authorization': localStorage.token}}),
}