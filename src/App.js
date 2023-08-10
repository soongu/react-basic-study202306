import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

const App = () => {

  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App 실행!');

  const toggleParagraphHandler = e => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>방가방가</h1>
      {/* 프롭스가 바뀌지 않으면 DemoOutput도 재실행되지 않는다 */}
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>문단 보이기</Button>
    </div>
  );
}

export default App;
