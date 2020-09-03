import axios from 'axios';
import { BASE_URL } from '../config/config';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;
