import React from 'react';

const Contacts = () => {

  const styleDivHome = {
    padding: '30px',
    width: 'auto',
    height: '100%',
    boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
    margin: '2% 5% 3% 5%',
  };


  const divAlignStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  return(
    <div style={styleDivHome}>
      <h1>Contatti</h1>
      <h5>La sezione contatti è ancora in fase di sviluppo</h5>
    </div>
  );
};

export default Contacts;
