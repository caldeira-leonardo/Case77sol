import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api2.77sol.com.br',
});

export default api;
