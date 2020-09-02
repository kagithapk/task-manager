import React from 'react';

const DashboardPage = () => {
  const slideImages = [
    'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1502447533750-9860c1269ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  ];
  return (
    <>
      {
        slideImages.map((image) => <div key={image} style={{ backgroundImage: `url(${image})`, width: '100px', height: '100px' }} className="image" />)
      }
    </>
  );
};

export default DashboardPage;
