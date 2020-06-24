import axios from 'axios'
import config from '../config/config';

import {User} from "../store/types/user";
import {NewUserValues} from "../store/reducers/user-reducer";

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
