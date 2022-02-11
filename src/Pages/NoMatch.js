import React from 'react';

const NoMatch = () => {
  const styleDivHome = {
    padding: '30px',
    width: 'auto',
    height: '100%',
    boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
    margin: '10px 100px 50px 100px',
    textAlign: 'center'
  };

  return (
    <div style={styleDivHome}>
      <h2>No Page Found :(</h2>
    </div>
  );
};

export default NoMatch;
