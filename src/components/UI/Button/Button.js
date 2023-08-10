import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button 실행!');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// 버튼은 변한게 없는데도 계속 실행되는 이유??
// -> 전달되는 onclick핸들러가 App.js가 재실행되면서
//    재생성되기 때문!
// ?? 그럼 왜 DemoOutput에 있는 false도 재생성된 false일텐데
//    React.memo가 작동하는가?
// -> 원시값이기 때문 React.memo의 원리는
//    props.prevValue === props.newValue로 비교하기 때문이다!
export default React.memo(Button);
