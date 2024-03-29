import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoPath from '../img/logo512path.webp';

const itLanguage = {
  walkingPath: 'Percorsi',
  infoContact: 'Contatti',
  aboutUs: 'About Us'
};

const NavbarComp = () => {

  const styleNav = {
    display: 'flex',
    alignItems: 'center',
    padding: '30px 25px',
    boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)'
  };

  const styleLink = {
    margin: '10px',
    padding: '5px',
    textDecoration: 'none',
    color:'green'
  };

  return(
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={styleNav}>
      <Navbar.Brand href="#">
        <img
          alt=""
          src={logoPath}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Brand >
        <div style={{ }} >Umbriapiedi</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link style={styleLink} to="/">{itLanguage.walkingPath}</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span" >
            <Link style={styleLink} to="/aboutus">{itLanguage.aboutUs}</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
