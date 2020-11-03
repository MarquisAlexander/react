import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ip_da_maquina:3333',
});

export default api;