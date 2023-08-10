import React from 'react';

const DemoOutput = (props) => {
  console.log('DemoOutput 실행~');
  return <p>{props.show ? '새로운 문단~~' : ''}</p>;
};

export default DemoOutput;
