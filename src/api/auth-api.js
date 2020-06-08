import axios from 'axios';
import jwtDecode from 'jwt-decode';
import config from '../config/config';
const instance = axios.create({
    baseURL: `${config.apiUrl}api/auth`,
});

export const saveTokens = (tokens)=>{
    localStorage.setItem('token', tokens.token);
    localStorage.setItem('refreshToken', tokens.refreshToken);
};

const authApi = {
    signup: (data) =>instance.post('/signup',data),
    signin: (data) =>instance.post('/signin',data),
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