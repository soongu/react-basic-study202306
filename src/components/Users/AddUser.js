import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = () => {

  const addUserHandler = e => {
    e.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">이름</label>
        <input id="username" type="text" />
        <label htmlFor="age">나이</label>
        <input id="age" type="number" />
        <Button type="submit">가입하기</Button>
      </form>
    </Card>
  );
};

export default AddUser;
