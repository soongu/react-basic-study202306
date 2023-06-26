import React from "react";

import styles from "./Modal.module.scss";

import Portal from "./Portal";

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return (
    <>
      <Portal target="backdrop-root">
        <Backdrop onClose={onClose} />
      </Portal>
      <Portal target="overlay-root">
        <ModalOverlay>{children}</ModalOverlay>
      </Portal>
    </>
  );
};

export default Modal;
