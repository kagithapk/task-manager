import React from 'react';
import Input from '../components/atoms/input';
import Button from '../components/atoms/button';

export const loginFormFields = (formTagData, states) => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    openForm,
  } = states;

  const { element, type, props } = formTagData;

  switch (element) {
    case 'input':
      switch (type) {
        case 'text':
          return (
            <Input
              {...props}
              value={name}
              handleChange={setName}
            />
          );
        case 'email':
          return (
            <Input
              {...props}
              value={email}
              handleChange={setEmail}
            />
          );
        case 'password':
          return (
            <Input
              {...props}
              value={password}
              handleChange={setPassword}
            />
          );
        default:
          return (
            <Input
              id="default"
              type="text"
              name="default"
            />
          );
      }
    case 'button':
      return (
        <Button
          {...props}
          handleClick={handleSubmit}
          disabled={!openForm}
        />
      );
    default: return null;
  }
};

export default loginFormFields;
