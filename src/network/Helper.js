import axios from 'axios';
import {Constants} from '../utils/global/Constants';

export const Helper = () => {
  let baseURL = 'https://jsonplaceholder.typicode.com/';
  const axiosApi = axios.create({baseURL});

  axiosApi.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error.response);
    },
  );

  return axiosApi;
};
