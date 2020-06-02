import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
});

let ajaxRequest = null;
export default {
    getAddresses: (query) =>{
        if (ajaxRequest ) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();

        return instance.post(null,query, {
            cancelToken: ajaxRequest.token,
            headers:{
            'Authorization': 'Token e06d7502e3aa02ab875df4b8e526ac709d4635c9',
            'Content-Type': 'application/json',
            'Accept':'application/json'
        }})}
}