import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.tibiadata.com/v2/',
});

export default api;
