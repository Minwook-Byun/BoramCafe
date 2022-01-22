import { useState } from 'react';
import ProductData from './data';

const Post = () => {
  const [제품리스트, 제품명변경] = useState(ProductData);
  const [moreSwitch, toggleMoreSwitch] = useState(false);

  return 제품리스트.map((item, i) => {
    return (
      <div className="contents-list">
        <h2>
          {제품리스트[i].id}
          {제품리스트[i].title}
        </h2>
        <h3>{제품리스트[i].content}</h3>
        <span>{제품리스트[i].price}</span>

        <button
          className="contents-more"
          onClick={() => {
            toggleMoreSwitch(!moreSwitch);
          }}
        >
          더보기
        </button>
        {moreSwitch === true ? <Modal /> : null}
      </div>
    );
  });
};

function Modal() {
  return <div>ㅎㅇㅎㅇ</div>;
}

export default Post;
