import instance from './axiosInstance';
import GET_TOKEN from '../helpers/getToken';

const instanceHelper = (method, route, data = {}) => (
  instance({
    method,
    url: route,
    data,
    headers: {
      Authorization: GET_TOKEN(),
    },
  })
);

const TASK_API = {
  get: (route) => instanceHelper('get', route),
  post: (route, data) => instanceHelper('post', route, data),
  patch: (route, data) => instanceHelper('patch', route, data),
  delete: (route, data) => instanceHelper('delete', route, data),
};

export default TASK_API;
