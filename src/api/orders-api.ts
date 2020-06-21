import axios from 'axios'
import config from '../config/config';
import {OrderWithFullInfo} from "../store/types/order";

const instance = axios.create({
    baseURL: `${config.apiUrl}api/orders`,
});

export default {
    getOrder: (id:string) =>{
        return instance.get<{order:OrderWithFullInfo}>(`/${id}`,{withCredentials:true, headers:{
                'Authorization': localStorage.token}
        })
    },
    addOrder: (products:Array<string>, address:string, deliveryType:string, paymentType:string) =>{
        return instance.post('/',{products, address, deliveryType, paymentType},
            {withCredentials:true, headers:{
                'Authorization': localStorage.token}
        })
    },
}