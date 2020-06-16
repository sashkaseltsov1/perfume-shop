import axios from 'axios'
import config from '../config/config';
const instance = axios.create({
    baseURL: `${config.apiUrl}api/filters`,
});

const filtersApi= {
    getFilters: () =>instance.get(),
    getFilter: (category) =>instance.get(`/${category}`),
    addFilter: (category, type) =>instance.post(`/${category}`,
        {type:type},
        {withCredentials:true, headers:{
            'Authorization': localStorage.token}
    }),
    removeFilter: (category, optionId) =>instance.delete(`/${category}/${optionId}`,
        {withCredentials:true, headers:{
                'Authorization': localStorage.token}
        }),
};
export default filtersApi;