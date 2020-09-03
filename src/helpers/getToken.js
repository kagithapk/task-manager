import MANAGE_COOKIES from './cookiesHelper';

const GET_TOKEN = () => {
  const token = MANAGE_COOKIES.get('token');
  return token;
};

export default GET_TOKEN;
