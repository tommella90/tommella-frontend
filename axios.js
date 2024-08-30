// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tommella-cv-prod-ee14d9b8bb74.herokuapp.com/', 
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
