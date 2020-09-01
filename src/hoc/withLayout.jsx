import React from 'react';

const withLayout = (component) => {
  const wrapperComponent = () => (
    <>
      <p>wrapper component</p>
      {component}
    </>
  );

  return wrapperComponent;
};

export default withLayout;
