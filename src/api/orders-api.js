import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://176.197.36.4:8000/api/orders',
});

export default {
    getOrder: (id) =>{
        return instance.get(`/${id}`,{withCredentials:true, headers:{
                'Authorization': localStorage.token}
        })
    },
}