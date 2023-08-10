import React from 'react';

const DemoOutput = (props) => {
  console.log('DemoOutput 실행~');
  return <p>{props.show ? '새로운 문단~~' : ''}</p>;
};

// props가 변경될때만 재실행하겠다
export default React.memo(DemoOutput); 
