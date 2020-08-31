import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.scss';

const LoginForm = ({ children }) => (
  <>
    <form className="form-container">
      {children}
    </form>
  </>
);

LoginForm.propTypes = {
  children: PropTypes.element,
};

LoginForm.defaultProps = {
  children: <></>,
};

export default LoginForm;
