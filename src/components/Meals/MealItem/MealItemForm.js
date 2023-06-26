import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.scss";

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsVaild, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
    setAmountIsValid(true);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="수량"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">담기</button>
      {amountIsVaild || <p>1~5사이의 수량을 선택하세요!</p>}
    </form>
  );
};

export default MealItemForm;
