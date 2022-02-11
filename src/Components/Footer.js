import React from 'react';
import styled from 'styled-components';

const Footer = () => {

  const styleFooter = {
    height: '50px',
  };

  const Footer = styled.footer`
    margin-top: 1rem;
    padding: 1rem;
    bottom: 0;
    left: 0;
    width: 100%;
  `;

  return(
    <Footer>
      <h6>Leggenda difficolta: T-&gt;Turistico E-&gt;Escursionista EE-&gt;Escursionista Esperto</h6>
    </Footer>
  );
};

export default Footer;
