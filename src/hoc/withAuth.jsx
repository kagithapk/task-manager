import React from 'react';
import { Redirect } from 'react-router-dom';
import GET_TOKEN from '../helpers/getToken';

/*
  Checking if your is logged in or not
*/

const withAuth = (Component) => {
  const WrapperComponent = () => {
    if (GET_TOKEN()) {
      return <Component />;
    }

    return <><Redirect to="/login" /></>;
  };

  return WrapperComponent;
};

export default withAuth;
