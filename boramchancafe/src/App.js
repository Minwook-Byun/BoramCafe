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
  return (
    <div className="App">
      <Modal />
      <div className="global-nav">
        <h1>보람찬 카페</h1>
      </div>
      {글제목.map((title) => {
        return (
          <ul className="post-main-lists">
            <li>
              {title}
              {/* index가 들어가는 것이 아니라 elements가 각각 title에 들어가므로 
              글제목[title]과 같은 씽크빅하면 안 된다 */}
              <span>👍</span>
            </li>
            <img alt="대체 텍스트, 나뭇잎 먹는 쿼카" src={ALTER_IMG} />
          </ul>
        );
      })}{' '}
    </div>
  );
}

function Modal() {
  return (
    <div>
      <h1>공지사항</h1>
      <h2>공지내용</h2>
      <span>날짜</span>
    </div>
  );
}

export default App;
