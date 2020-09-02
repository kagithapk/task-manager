import React from 'react';
import Header from '../components/organisms/header';
import Space from '../components/atoms/space';

const withLayout = (Component) => {
  const wrapperComponent = () => (
    <>
      <Header />
      <Space />
      <Component />
    </>
  );

  return wrapperComponent;
};

export default withLayout;
