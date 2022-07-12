import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

const axiosConfig = {
  baseURL: `${REACT_APP_BACKEND_URL}/api`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
};

const api = axios.create(axiosConfig)

export const verify = () => api.get('auth/verify');
