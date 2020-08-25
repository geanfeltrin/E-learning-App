import axios from 'axios';
import {
  API_URL,
  BASIC_AUTH_USERNAME,
  BASIC_AUTH_PASSWORD,
} from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_URL,
  auth: {
    username: BASIC_AUTH_USERNAME,
    password: BASIC_AUTH_PASSWORD,
  },
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

export default api;
