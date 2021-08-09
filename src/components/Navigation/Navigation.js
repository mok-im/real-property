import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">

      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;