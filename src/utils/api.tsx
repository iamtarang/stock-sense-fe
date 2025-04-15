
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
// import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


// const [cookies] = useCookies(['access_token']);
// const token = cookies?.access_token;

// Define the base API instance
export const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export const loginApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request Interceptor (Attach Token)
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    // Check if we're already on the login page to prevent loops
    if (error.response?.status === 401 && !originalRequest._retry && window.location.pathname !== '/login') {
      originalRequest._retry = true;

      try {
        localStorage.removeItem('access_token');
        const navigate = useNavigate();
        navigate('/login')// Redirect to login page
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
