import axios from 'axios';
import API_CONFIG from '../configs/api.config';

const http = axios.create({
  baseURL: API_CONFIG.URI,
  timeout: 5000,
});

http.interceptors.response.use(
  (response) => {
    return response.data.data ? response.data.data : response.data;
  },
  (error) => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      console.log(error);
    }
    return Promise.reject(error.response.data.error);
  }
);

const HttpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};

export default HttpService;
