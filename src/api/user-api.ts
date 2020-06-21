import axios from 'axios'
import config from '../config/config';
import {NewUserValues} from "../store/thunk-creators/user-thunks";
import {User} from "../store/types/user";

const instance = axios.create({
    baseURL: `${config.apiUrl}api/user`,
});

export default {
    getUser: () =>{
        return instance.get<{user:User}>('',{withCredentials:true, headers:{
            'Authorization': localStorage.token}
        })
    },
    editUser: (data:NewUserValues) =>instance.put('/',data, { withCredentials: true , headers:{
            'Authorization': localStorage.token
        }}),

}
