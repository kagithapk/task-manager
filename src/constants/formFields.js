// login form fields elements
export const loginFormFields = [
  {
    element: 'input',
    type: 'email',
    props: {
      type: 'email',
      id: 'login-email',
      name: 'Email',
      className: 'input-large',
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
      className: 'input-large',
    },
  },
  {
    element: 'button',
    type: 'submit',
    props: {
      type: 'submit',
      label: 'Login',
      className: 'button-success button-large',
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
      className: 'input-large',
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
      className: 'input-large',
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
      className: 'input-large',
    },
  },
  {
    element: 'button',
    type: 'submit',
    props: {
      type: 'submit',
      label: 'Login',
      className: 'button-success button-large',
    },
  },
];

export default loginFormFields;
