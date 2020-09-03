import React from 'react';
import Header from '../components/organisms/header';
import Space from '../components/atoms/space';

/*
  Adding header component
*/

const withLayout = (Component) => () => (
  <>
    <Header />
    <Space />
    <Component />
  </>
);

export default withLayout;
