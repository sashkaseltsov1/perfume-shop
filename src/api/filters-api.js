import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://176.197.36.4:8000/api/filters',
});

const filtersApi= {
    getFilters: () =>{
       /* try {
            await authApi.auth();
        }catch (e) {
            return new Promise(()=>{
                throw Error(e);
            });
        }*/
        /*return instance.get(null,{withCredentials:true, headers:{
            'Authorization': localStorage.token}
        })},*/
        return instance.get()},
};
export default filtersApi;