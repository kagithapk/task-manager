import React from 'react';
import { Redirect } from 'react-router-dom';
import GET_TOKEN from '../helpers/getToken';

/*
  Checking if your is logged in or not
*/

const withAuth = (Component) => () => {
  if (GET_TOKEN()) {
    return <Component />;
  }

  return <><Redirect to="/login" /></>;
};

export default withAuth;
