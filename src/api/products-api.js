import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://176.197.36.4:8000/products',
});

export default {
    getProducts: (params) =>instance.get(params),

}