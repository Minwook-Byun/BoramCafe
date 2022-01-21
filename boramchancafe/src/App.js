import React, { useState } from 'react';
import './App.css';
import ALTER_IMG from './img/alter_img.PNG';

function App() {
  let [글제목, 글제목변경] = useState([
    '보람이 다녀온 곳1',
    '보람이 다녀온 곳2',
    '보람이 다녀온 곳3',
  ]);
  let [like, likeOnClick] = useState(0);
  let [modalSwitch, modalSwitchToggle] = useState(true);
  let [ClickedModalTitle, ChangeModalTitle] = useState(0);
  return (
    <div className="App">
      <div className="global-nav">
        <h1>보람찬 카페</h1>
      </div>
      {글제목.map((title, i) => {
        return (
          <ul className="post-main-lists">
            <li>
              <h2
                onClick={() => {
                  ChangeModalTitle(i);
                }}
              >
                {title}
              </h2>
              {/* index가 들어가는 것이 아니라 elements가 각각 title에 들어가므로 
              글제목[title]과 같은 씽크빅하면 안 된다 */}
              <span>👍</span>
            </li>
            <img alt="대체 텍스트, 나뭇잎 먹는 쿼카" src={ALTER_IMG} />
          </ul>
        );
      })}
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
      <h2>내용</h2>
      <span>날짜</span>
    </div>
  );
}

export default App;
