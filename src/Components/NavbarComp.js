import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComp = () => {

  const styleNav = {
    display: 'flex',
    alignItems: 'center',
    padding: '30px 25px',
    boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
  };

  const styleLink = {
    margin: '10px',
    padding: '5px',
    textDecoration: 'none'
  };

  return(
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={styleNav}>
      <Navbar.Brand href="#">Paths of Umbria</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span" >
            <Link style={styleLink} to="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span" >
            <Link style={styleLink} to="/paths_a_piedi">Paths a Piedi</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span" >
            <Link style={styleLink} to="/contacts">Contacts</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
