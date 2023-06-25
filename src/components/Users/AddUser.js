import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [error, setError] = useState();
  const [userValue, setUserValue] = useState({
    username: "",
    age: "",
  });

  const addUserHandler = (e) => {
    e.preventDefault();
    const { username, age } = userValue;
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

    onAddUser(userValue);
    // console.log(userValue.username, userValue.age);
    setUserValue({ username: "", age: "" });
  };

  const usernameChangerHandler = (e) => {
    setUserValue((prev) => {
      return { ...prev, username: e.target.value };
    });
  };
  const ageChangeHandler = (e) => {
    setUserValue((prev) => {
      return { ...prev, age: e.target.value };
    });
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
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
            onChange={usernameChangerHandler}
            value={userValue.username}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={userValue.age}
          />
          <Button type="submit">가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
