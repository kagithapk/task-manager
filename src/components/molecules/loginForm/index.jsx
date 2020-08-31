import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.scss';
import { loginFormFields as tagsHelper } from '../../../helpers/loginFormFields';

const LoginForm = ({ formFields, formType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
  }, [formType]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  useEffect(() => {
    if (email.trim()
      && password.trim()
      && (formType.toLowerCase() === 'login'
        ? true
        : name.trim())) setOpenForm(true);
    else setOpenForm(false);
  }, [email, password, name]);

  return (
    <>
      <form className="form-container">
        {
          formFields.map((field) => (
            <section
              key={JSON.stringify(field)}
              className="form-section"
            >
              {
                tagsHelper(field, {
                  name,
                  setName,
                  email,
                  setEmail,
                  password,
                  setPassword,
                  handleSubmit,
                  openForm,
                })
              }
            </section>
          ))
        }
      </form>
    </>
  );
};

LoginForm.propTypes = {
  formFields: PropTypes.arrayOf(PropTypes.shape({
    element: PropTypes.string,
    type: PropTypes.string,
    props: PropTypes.shape(PropTypes.any),
  })),
  formType: PropTypes.string,
};

LoginForm.defaultProps = {
  formFields: [],
  formType: 'login',
};

export default LoginForm;
