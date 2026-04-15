import axios from 'axios';

// Base API URL configuration
// Using environment variable with fallback to local backend for development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = {
  // Admissions
  submitInquiry: async (data) => {
    const response = await apiClient.post('/admissions/inquiries', data);
    return response.data;
  },

  // Contact
  submitMessage: async (data) => {
    const response = await apiClient.post('/contact/messages', data);
    return response.data;
  },

  // Notices
  getNotices: async (category = null) => {
    const params = category ? { category } : {};
    const response = await apiClient.get('/notices', { params });
    return response.data;
  },
};
