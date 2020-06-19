import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.cypress.io';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(config => {
    console.log(config);
    // Edit the request config if needed.
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit the request config if needed.
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
