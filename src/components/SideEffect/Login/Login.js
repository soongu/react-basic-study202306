import React, { useEffect, useState, useReducer, useContext } from "react";

import Card from "../../UI/Card";
import styles from "./Login.module.css";
import Button from "../../UI/Button";
import AuthContext from "../../../store/auth-context";
import Input from "../../UI/Input";

// 리듀서 함수는 컴포넌트 내부데이터와 관련이 없고
// useReducer안에서만 작동하기 때문에 컴포넌트 밖에 선언한다.
// param1: 이전 상태값
// param2: dispatch함수가 전달한 액션객체
const emailReducer = (state, action) => {
  // console.log('emailReducer call!');
  // console.log(state);
  // console.log(action);
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: null };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: null };
};

const Login = () => {
  const { onLogin } = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // param1: 리듀서 함수
  // param2: 초기 state상태
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  });

  // 사실 useEffect안에서는 emailState의 isValid만 필요하다
  // 따라서 디스트럭쳐링을 사용
  // 콘솔로그에서 직접 확인해볼것! valid값이 변할때만 입력값을 검증함
  const { isValid: emaliIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('입력값 검증 시작!');
      setFormIsValid(
        // emailState.isValid && passwordState.isValid
        emaliIsValid && passwordIsValid
      );
    }, 500);

    // clean up func
    return () => {
      clearTimeout(identifier);
    };
  // }, [emailState, passwordState]);
  }, [emaliIsValid, passwordIsValid]);

  const emailChangeHandler = (e) => {
    // setEnteredEmail(e.target.value);
    dispatchEmail({ type: 'USER_INPUT', val: e.target.value });

    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (e) => {
    // setEnteredPassword(e.target.value);
    dispatchPassword({ type: 'USER_INPUT', val: e.target.value });

    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input 
          type='email'
          id='email'
          label='E-Mail'
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input 
          type='password'
          id='password'
          label='Password'
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
