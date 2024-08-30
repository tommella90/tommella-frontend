// src/axios.js
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development'
  ? process.env.VUE_APP_API_URL_DEV
  : process.env.VUE_APP_API_URL_PROD;

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
