import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {

  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (e) => {
    e.preventDefault();

    // console.log(nameInputRef.current.value);

    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "유효하지 않은 입력값",
        message: "입력값은 필수로 작성해야 합니다.",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "유효하지 않은 나이의 범위",
        message: "나이는 1이상의 값만 입력해주세요.",
      });
      return;
    }

    onAddUser({username, age});

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">이름</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">가입하기</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
