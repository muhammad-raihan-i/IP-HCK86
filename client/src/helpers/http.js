import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

const http = axios.create({
  baseURL: BASE_URL,
});

export default http;
