import axios from 'axios'
import jwtDecode from 'jwt-decode'
const instance = axios.create({
    baseURL: 'http://176.197.36.4:8000/api/auth',
});

export const saveTokens = (tokens)=>{
    localStorage.setItem('token', tokens.token);
    localStorage.setItem('refreshToken', tokens.refreshToken);
};

const authApi = {
    signup: (data) =>instance.post('/signup',data, { withCredentials: true , headers:{
            "Content-Type": "application/json"
        }}),
    signin: (data) =>instance.post('/signin',data, { withCredentials: true , headers:{
            "Content-Type": "application/json"
        }}),
    auth:async () =>{
        let token = localStorage.token;
        let refreshToken = localStorage.refreshToken;
        if(token && refreshToken){
            let decode = jwtDecode(token);
            if (Date.now() >= decode.exp * 1000){
                try {
                    let response = await instance.put('/refresh-token', {refreshToken:refreshToken});
                    saveTokens(response.data);
                    return response;
                }catch (e) {
                    return new Promise(()=>{throw Error(e)});
                }
            }
            return new Promise((resolve)=>resolve({data:{token,refreshToken}}));
        }
        return new Promise(()=>{throw Error('Unauthorized')});
    },
};
export default authApi;