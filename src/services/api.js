import axios from "axios";
import env from "./environment.json";

export const API = axios.create({
  baseURL: env.BASE_URL,
});

API.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

API.interceptors.response.use(
  (resp) => {
    return resp;
  },
  async (err) => {
    return Promise.reject(err.response);
  }
);
