import axios from 'axios'
import config from '../config/config';

const instance = axios.create({
    baseURL: `${config.apiUrl}api/orders`,
});

export default {
    getOrder: (id) =>{
        return instance.get(`/${id}`,{withCredentials:true, headers:{
                'Authorization': localStorage.token}
        })
    },
    addOrder: (products, address, deliveryType, paymentType) =>{
        return instance.post('/',{products, address, deliveryType, paymentType},
            {withCredentials:true, headers:{
                'Authorization': localStorage.token}
        })
    },
}