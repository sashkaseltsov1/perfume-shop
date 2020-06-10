import axios from 'axios'
import config from '../config/config';

const instance = axios.create({
    baseURL: `${config.apiUrl}api/products`,
});

export default {
    getProducts: params =>instance.get(params),
    getProduct: (id, count) =>instance.get(`/${id}?count=${count}`),
    addComment:(id,data) =>instance.post(`/${id}`,data),
}