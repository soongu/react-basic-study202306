import React, { useImperativeHandle, useRef } from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef(({isValid, id, label, type, value, ...rest}, ref) => {

  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focusOn: activate,
    };
  });

  return (
    <div
      className={`${styles.control} ${isValid === false ? styles.invalid : ""}`}
    >
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} ref={inputRef} {...rest} />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
