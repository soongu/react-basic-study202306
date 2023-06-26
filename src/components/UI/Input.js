import React from "react";

import styles from './Input.module.scss';

const Input = React.forwardRef(({ input, label }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

Input.displayName = 'INPUT';

export default Input;
