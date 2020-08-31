import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InitialTemplate from '../../templates/initialTemplate';
import { loginFormFields, signInFormFields } from '../../../constants/formFields';
import { loginFormFields as tagsHelper } from '../../../helpers/loginFormFields';

/*
  props:
  history: object of history (use to navigate)
*/

const LoginPage = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState('login');

  useEffect(() => {
    if (email.trim()
      && password.trim()
      && (formType.toLowerCase() === 'login'
        ? true
        : name.trim())) setOpenForm(true);
    else setOpenForm(false);
  }, [email, password, name, formType]);

  useEffect(() => {
    setEmail('');
    setPassword('');
    setName('');
  }, [formType]);

  let formFields;

  switch (formType) {
    case 'login':
      formFields = loginFormFields;
      break;
    case 'signUp':
      formFields = signInFormFields;
      break;
    default:
      formFields = [];
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (formType) {
      case 'login':
        history.push('/');
        break;
      case 'signUp':
        history.push('/');
        break;
      default: break;
    }
  };

  const onTabClick = (value) => {
    switch (value) {
      case 'login': history.push('/login'); break;
      case 'signUp': history.push('/sign-up'); break;
      default: break;
    }
    setFormType(value);
  };

  const form = (
    <>
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
    </>
  );

  return (
    <>
      <InitialTemplate
        headingText="Kagitha's Task App"
        tabOptionOneText="Login"
        tabOptionTwoText="Sign up"
        onTabClick={onTabClick}
        form={form}
        formType={formType}
      />
    </>
  );
};

LoginPage.propTypes = {
  history: PropTypes.shape(PropTypes.any),
};

LoginPage.defaultProps = {
  history: {
    push: () => {},
  },
};

export default LoginPage;
