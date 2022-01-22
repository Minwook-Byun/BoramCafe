import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Post from './posts';

// 라우팅 관련
import { Link, Route, Switch } from 'react-router-dom';

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

      {/* 메인페이지 */}
      <Route exact path="/">
        <Post />
        <Post />
      </Route>

      {/* 상세 페이지 */}
      <Route exact path="/details">
        <div>ㅎㅇ 저 상세 페이지임</div>
      </Route>
    </div>
  );
}

export default App;
