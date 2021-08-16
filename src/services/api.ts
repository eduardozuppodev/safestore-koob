import axios from 'axios';

const api = axios.create({
  baseURL: 'https://safestore.herokuapp.com/',
});

export default api;
