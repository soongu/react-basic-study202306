import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, target }) => {
  return ReactDOM.createPortal(children, document.getElementById(target));
};

export default Portal;
