import axios from "axios";
import { store } from "reduxapp/store";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const token = store.getState().user?.user?.token;

    if (token) {
      config.headers["Authorization"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
