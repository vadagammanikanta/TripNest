import axios from 'axios';
import authService from './auth.service';

const API_URL = '/api/test/';

/**
 * Axios instance with JWT Authorization header injected on every request.
 */
const authAxios = axios.create();

authAxios.interceptors.request.use(
  (config) => {
    const token = authService.getToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Redirect to login if 401 received
authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      authService.logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

const getPublicContent = () => authAxios.get(API_URL + 'all');
const getTravelerBoard = () => authAxios.get(API_URL + 'traveler');
const getAgentBoard = () => authAxios.get(API_URL + 'agent');
const getAdminBoard = () => authAxios.get(API_URL + 'admin');
const getUserProfile = () => authAxios.get(API_URL + 'profile');

const apiService = {
  getPublicContent,
  getTravelerBoard,
  getAgentBoard,
  getAdminBoard,
  getUserProfile,
};

export default apiService;
