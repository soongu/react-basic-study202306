import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

const App = () => {

  const [showParagraph, setShowParagraph] = useState(false);

  // state가 변경되면 이 로그가 계속 찍힘
  // 그 말은 곧 상태가 변경되면 컴포넌트 전체가 재평가된다는 소리
  console.log('App 실행!');

  const toggleParagraphHandler = e => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>방가방가</h1>
      {/* DemoOutput에서 props를 없앴는데도
      버튼을 클릭해보면 DemoOutput의 콘솔로그가 찍힌다
      이는 부모컴포넌트가 상태업데이트가 일어나면
      자식컴포넌트들이 다시 재실행된다는 걸 의미한다.
      이는 불필요한 추가실행이다  */}
      <DemoOutput />
      <Button onClick={toggleParagraphHandler}>문단 보이기</Button>
    </div>
  );
}

export default App;
