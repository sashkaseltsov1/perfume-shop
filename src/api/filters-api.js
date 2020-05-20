import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://176.197.36.4:8000/filters',
});

export default {
    getFilters: () =>instance.get(),

}