import Cookies from 'universal-cookie';

const cookies = new Cookies();
const MANAGE_COOKIES = {
  set: (name, data) => cookies.set(name, data),
  get: (name) => cookies.get(name),
  remove: (name) => cookies.remove(name),
};

export default MANAGE_COOKIES;
