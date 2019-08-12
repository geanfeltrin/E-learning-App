import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.sistemaresidencia.com.br/sre/apiN/v1',
  auth: {
    username: 'dmc',
    password: '999159389',
  },
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

export default api;
