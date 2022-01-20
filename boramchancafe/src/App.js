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
      <div className="global-nav">
        <h1>보람찬 카페</h1>
        <button
          onClick={() => {
            글제목변경(['회기동커피추천', '회기동커피추천', '회기동커피추천']);
          }}
        >
          글 수정
        </button>
      </div>

      <section className="post-main--contents">
        <ul className="post-main-lists">
          <li>
            {글제목[0]}
            <span
              onClick={() => {
                likeOnClick(like + 1);
              }}
            >
              👍
            </span>
            {like}
          </li>
          <img alt="대체 텍스트, 나뭇잎 먹는 쿼카" src={ALTER_IMG} />
        </ul>
        <ul className="post-main-lists">
          {' '}
          <li>{글제목[1]}</li>{' '}
          <img alt="대체 텍스트, 나뭇잎 먹는 쿼카" src={ALTER_IMG} />
        </ul>
        <ul className="post-main-lists">
          {' '}
          <li>{글제목[2]}</li>{' '}
        </ul>
      </section>
    </div>
  );
}

export default App;
