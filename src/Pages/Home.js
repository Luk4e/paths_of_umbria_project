import React from 'react';

const Home = () => {

  const styleDivHome = {
    padding: '30px',
    width: 'auto',
    height: '100%',
    boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
    margin: '10px 100px 50px 100px',
  };

  return (
    <div style={styleDivHome}>
      <h5>Sito per consultare percorsi trekking Umbria</h5>
      <h6>[spiegazione del sito con link a regione fonti dei path]</h6>
      <h6>[leggenda difficolta]</h6>
    </div>
  );

};

export default Home;
