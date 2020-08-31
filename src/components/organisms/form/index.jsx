import React, { useState } from 'react';
import './Form.scss';
import LoginForm from '../../molecules/loginForm';
import { loginFormFields, signInFormFields } from '../../../constants/formFields';
import TextP from '../../atoms/textP';

const Form = () => {
  const [formType, setFormType] = useState('login');
  let formFields;

  switch (formType) {
    case 'login':
      formFields = loginFormFields;
      break;
    case 'signIn':
      formFields = signInFormFields;
      break;
    default:
      formFields = [];
  }

  return (
    <>
      <section className="form-types-container">
        <section className="form-type-heading-container">
          <section
            role="button"
            className="login-heading"
            onKeyDown={() => setFormType('login')}
            onClick={() => setFormType('login')}
            tabIndex={0}
          >
            <TextP context="Login" className="text-p-black" />
          </section>
          <section
            role="button"
            className="sign-up-heading"
            onKeyDown={() => setFormType('signIn')}
            onClick={() => setFormType('signIn')}
            tabIndex={-1}
          >
            <TextP context="Sign Up" className="text-p-black" />
          </section>
        </section>
        <LoginForm formFields={formFields} formType={formType} />
      </section>
    </>
  );
};

export default Form;
