import './App.css';
import React from 'react';
import Main from './Main';
import Footer from './Footer';

const App = () => {

  const divStyle = {
    textAlign: 'center',
  };

  return (
    <div style={divStyle}>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
