import React from "react";

import styles from "./Modal.module.scss";

import Portal from './Portal';

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const Modal = ({children}) => {
  return (
    <>
      <Portal target='backdrop-root'>
        <Backdrop />
      </Portal>
      <Portal target='overlay-root'>
        <ModalOverlay>{children}</ModalOverlay>
      </Portal>
    </>
  );
};

export default Modal;
