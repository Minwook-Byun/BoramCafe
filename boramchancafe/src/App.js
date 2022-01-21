import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import IMG_1 from './img/1.jpg';
import IMG_2 from './img/2.jpg';
import IMG_3 from './img/3.jpg';
import Post from './posts';

function App() {
  let [글제목, 글제목변경] = useState([
    '보람이 다녀온 곳1',
    '보람이 다녀온 곳2',
    '보람이 다녀온 곳3',
  ]);
  let [like, likeOnClick] = useState(0);
  let [modalSwitch, modalSwitchToggle] = useState(true);
  let [ClickedModalTitle, ChangeModalTitle] = useState(0);
  let [displayImgs, changeDisplayImgs] = useState([IMG_1, IMG_2, IMG_3]);

  let [userInput, changeUserInput] = useState(' ');

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Post />

      <div className="publish-input">
        <input
          onChange={(e) => {
            changeUserInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let CopiedArray = [...글제목];
            CopiedArray.unshift(userInput);
            글제목변경(CopiedArray);
          }}
        >
          저장
        </button>
      </div>

      <button
        onClick={() => {
          modalSwitchToggle(!modalSwitch);
        }}
      >
        더보기🙋
      </button>
      {modalSwitch === true ? (
        <Modal 글제목={글제목} ClickedModalTitle={ClickedModalTitle} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h1>{props.글제목[props.ClickedModalTitle]}</h1>
      {/* <h2> {props.displayImgs[1]} </h2> */}
      <span>날짜</span>
    </div>
  );
}

export default App;
