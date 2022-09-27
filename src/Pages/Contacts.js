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
      <h3>Luca Consalvi</h3>
      <h6>Per info o consigli potete contattarmi a questo indirizzo</h6>
      <h5>consalvi.luca@gmail.com</h5>
    </div>
  );
};

export default Contacts;
