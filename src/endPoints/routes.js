const END_POINTS = {
  users: '/users',
  usersLogin: '/users/login',
  usersLogout: '/users/logout',
  usersLogoutAll: '/users/logoutAll',
  usersIdAvatar: (id) => `/users/${id}/avatar`,
  tasks: '/tasks',
};

export default END_POINTS;
