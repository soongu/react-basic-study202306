import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = e => {
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>나의 목표</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
