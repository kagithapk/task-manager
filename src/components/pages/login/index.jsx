import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InitialTemplate from '../../templates/initialTemplate';
import { loginFormFields, signInFormFields } from '../../../constants/formFields';
import { loginFormFields as tagsHelper } from '../../../helpers/loginFormFields';
import TASK_API from '../../../api/taskApi';
import END_POINTS from '../../../endPoints/routes';
import { TYPE_LOGIN, TYPE_SIGN_UP } from '../../../constants/formType';
import MANAGE_COOKIES from '../../../helpers/cookiesHelper';
import Loader from '../../atoms/loader';

/*
  props:
  history: object of history (use to navigate)
*/

const LoginPage = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formURL = history.location.pathname.slice(1);
  let formTypeFromURL;
  switch (formURL) {
    case 'login':
      formTypeFromURL = TYPE_LOGIN; break;
    case 'sign-up':
      formTypeFromURL = TYPE_SIGN_UP; break;
    default:
      formTypeFromURL = TYPE_LOGIN;
  }
  const [formType, setFormType] = useState(formTypeFromURL);

  useEffect(() => {
    if (email.trim()
      && password.trim()
      && (formType.toLowerCase() === TYPE_LOGIN
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
    case TYPE_LOGIN:
      formFields = loginFormFields;
      break;
    case TYPE_SIGN_UP:
      formFields = signInFormFields;
      break;
    default:
      formFields = [];
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    switch (formType) {
      case TYPE_LOGIN:
        TASK_API.post(END_POINTS.usersLogin, { email, password })
          .then(async (response) => {
            if (response.status === 200) {
              setIsLoading(false);
              console.log(response.data);
              await MANAGE_COOKIES.set('token', response.data.token);
              history.push('/dashboard');
            }
          })
          .catch((e) => {
            setIsLoading(false);
            console.log(e);
          });
        break;
      case TYPE_SIGN_UP:
        TASK_API.post(END_POINTS.users, { name, email, password })
          .then(async (response) => {
            if (response.status === 201) {
              setIsLoading(false);
              console.log(response.data);
              await MANAGE_COOKIES.set('token', response.data.token);
              history.push('/dashboard');
            }
          })
          .catch((e) => {
            setIsLoading(false);
            console.log(e);
          });
        history.push('/');
        break;
      default: break;
    }
  };

  const onTabClick = (value) => {
    switch (value) {
      case TYPE_LOGIN: history.push('/login'); break;
      case TYPE_SIGN_UP: history.push('/sign-up'); break;
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
      {isLoading && <Loader />}
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
