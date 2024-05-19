import axios from "axios";
import { getStorageItem } from "../utils/tokenManager";

axios.interceptors.request.use(
  (config) => {
    const token = getStorageItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Accept = "application/json;version=v1_web";
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response.data.detail) {
      return Promise.reject(error.response.data.detail);
    } else {
      return Promise.reject("Erro não esperado");
    }
  }
);

export default axios;
