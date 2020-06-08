import axios from 'axios'
import config from '../config/config';
const instance = axios.create({
    baseURL: `${config.apiUrl}api/filters`,
});

const filtersApi= {
    getFilters: () =>instance.get(),
};
export default filtersApi;