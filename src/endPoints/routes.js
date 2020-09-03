const END_POINTS = {
  users: '/users',
  usersLogin: '/users/login',
  usersLogout: '/users/logout',
  usersLogoutAll: '/users/logoutAll',
  usersIdAvatar: (id) => `/users/${id}/avatar`,
};

export default END_POINTS;
