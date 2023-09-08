/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import { useAuthStore } from '../services/auth';

const authApi = axios.create({
  baseURL: `${import.meta.env.VITE_API}`,
  withCredentials: true,
});

authApi.interceptors.request.use(
  async (config: any) => {
    const token = useAuthStore.getState().token;
    
    // Asegúrate de utilizar el tipo AxiosRequestHeaders para los encabezados
    const headers: any = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };

    config.headers = headers;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authApi