import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/LeoGomes0919/GoMarketplace-server/',
});

export default api;
