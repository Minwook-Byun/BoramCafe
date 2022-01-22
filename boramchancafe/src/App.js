import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Post from './posts';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">보람+</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Coffee</Nav.Link>
            <Nav.Link href="#features">Books</Nav.Link>
            <Nav.Link href="#pricing">TBD</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Post />
      <Post />
    </div>
  );
}

export default App;
