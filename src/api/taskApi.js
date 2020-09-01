// import axios from 'axios';
import instance from './axiosInstance';

const TASK_API = {
  get: (route) => instance.get(route),
  post: (route, data) => instance.post(route, data),
  patch: (route, data) => instance.patch(route, data),
  delete: (route, data) => instance.delete(route, data),
};

export default TASK_API;
