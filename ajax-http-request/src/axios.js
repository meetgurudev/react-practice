import axios from 'axios';

const instace = axios.create({
    baseURL: 'https://jsonplaceholder.cypress.io'

});

// instace.interceptors.request...

instace.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTACE';

export default instace;