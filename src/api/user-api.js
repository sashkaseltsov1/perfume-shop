import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://176.197.36.4:8000/api/user',
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
