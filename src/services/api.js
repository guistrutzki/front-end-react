import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-node-kognaldo.herokuapp.com'
})

export default api;