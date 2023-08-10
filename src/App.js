import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';

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
      {showParagraph && <p>새로운 문단~~</p>}
      <Button onClick={toggleParagraphHandler}>문단 보이기</Button>
    </div>
  );
}

export default App;
