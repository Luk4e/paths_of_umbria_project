import React from 'react';
import Path from '../Components/Path';

export default function PathsInBici() {

  const stylePathContainer = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '40px',
    padding: '50px',
  };

  return (
    <div style={stylePathContainer}>
      <Path name="in bici" />
    </div>
  );
}
