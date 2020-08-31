import React, { useState, useEffect } from 'react';
import InitialTemplate from '../../templates/initialTemplate';
import { loginFormFields, signInFormFields } from '../../../constants/formFields';
import { loginFormFields as tagsHelper } from '../../../helpers/loginFormFields';

const LoginPage = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (formType) {
      case 'login':
        console.log(email, password);
        break;
      case 'signIn':
        console.log(name, email, password);
        break;
      default: break;
    }
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
        setFormType={setFormType}
        form={form}
      />
    </>
  );
};

export default LoginPage;
