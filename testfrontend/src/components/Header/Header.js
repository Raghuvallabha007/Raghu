import React from 'react';
import {Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <Navbar bg="primary" expand="lg" varient="dark">
  <Container>
    <Navbar.Brand>
        <Link to='/'>
            Notes Zipper
        </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
        <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
        </Nav>
      <Nav>
        <Nav.Link href="/mynotes">My Notes</Nav.Link>
        <NavDropdown title="Raghu" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default Header;