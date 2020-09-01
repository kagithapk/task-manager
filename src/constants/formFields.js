// login form fields elements
export const loginFormFields = [
  {
    element: 'input',
    type: 'email',
    props: {
      type: 'email',
      id: 'login-email',
      name: 'Email',
      className: 'input-large input-round',
      placeholder: 'Enter Email',
      title: 'Enter a valid email address.',
    },
  },
  {
    element: 'input',
    type: 'password',
    props: {
      id: 'login-password',
      type: 'password',
      name: 'Password',
      placeholder: 'Enter Password',
      className: 'input-large input-round',
    },
  },
  {
    element: 'button',
    type: 'submit',
    props: {
      type: 'submit',
      label: 'Login',
      className: 'button-success button-large button-space',
    },
  },
];

// sign up form fields elements
export const signInFormFields = [
  {
    element: 'input',
    type: 'text',
    props: {
      type: 'text',
      id: 'login-name',
      name: 'Name',
      className: 'input-large input-round',
      placeholder: 'Enter Name',
    },
  },
  {
    element: 'input',
    type: 'email',
    props: {
      type: 'email',
      id: 'login-email',
      name: 'Email',
      className: 'input-large input-round',
      placeholder: 'Enter Email',
      title: 'Enter a valid email address.',
    },
  },
  {
    element: 'input',
    type: 'password',
    props: {
      id: 'login-password',
      type: 'password',
      name: 'Password',
      placeholder: 'Enter Password',
      className: 'input-large input-round',
    },
  },
  {
    element: 'button',
    type: 'submit',
    props: {
      type: 'submit',
      label: 'Login',
      className: 'button-success button-large button-space',
    },
  },
];

export default loginFormFields;
