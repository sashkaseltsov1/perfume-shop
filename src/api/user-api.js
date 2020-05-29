import axios from 'axios'
import authApi from "./auth-api";

const instance = axios.create({
    baseURL: 'http://176.197.36.4:8000/api/user',
});

export default {
    getUser: () =>{
         /*try {
            await authApi.auth();
        }catch (e) {
            return new Promise(()=>{
                throw Error(e);
            });
        }*/
        return instance.get(null,{withCredentials:true, headers:{
            'Authorization': localStorage.token}
        })
    },
    editUser: (data) =>instance.put('/',data, { withCredentials: true , headers:{
            "Content-Type": "application/json"
        }})
}
