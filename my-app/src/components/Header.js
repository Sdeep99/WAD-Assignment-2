import React from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/" className="header-logo">
          My App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" activeClassName="active">
              Products
            </Nav.Link>
          </Nav>
          <Form inline className="header-search">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;