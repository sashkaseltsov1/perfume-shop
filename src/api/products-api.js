import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://176.197.36.4:8000/api/products',
});

export default {
    getProducts: params =>instance.get(params),
    getProduct: (id, count) =>instance.get(`/${id}?count=${count}`),
    addComment:(id,data) =>instance.post(`/${id}`,data)
}