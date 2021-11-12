import axios from 'axios';

const SERVER_API = 'http://localhost:5050';
const axiosClient = axios.create({
    baseURL: SERVER_API,
    headers: { 'content-type': 'application/json' },
});

export default axiosClient;
