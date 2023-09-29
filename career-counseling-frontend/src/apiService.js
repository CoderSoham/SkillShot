// src/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Set your preferred timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiService;
