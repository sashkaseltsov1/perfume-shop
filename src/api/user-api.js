import axios from 'axios'
import config from '../config/config';

const instance = axios.create({
    baseURL: `${config.apiUrl}api/user`,
});

export default {
    getUser: () =>{
        return instance.get(null,{withCredentials:true, headers:{
            'Authorization': localStorage.token}
        })
    },
    editUser: (data) =>instance.put('/',data, { withCredentials: true , headers:{
            'Authorization': localStorage.token
        }}),

}
