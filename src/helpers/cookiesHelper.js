import Cookies from 'universal-cookie';

const MANAGE_COOKIES = {
  set: (name, data) => {
    const cookies = new Cookies();
    cookies.set(name, data);
  },
  get: (name) => {
    const cookies = new Cookies();
    cookies.get(name);
  },
  remove: (name) => {
    const cookies = new Cookies();
    cookies.remove(name);
  },
};

export default MANAGE_COOKIES;
