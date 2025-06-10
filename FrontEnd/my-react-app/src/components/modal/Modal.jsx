import React from "react";
import styles from './Modal.module.css';
import ExitIcon from '../../assets/exit.svg?react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalContainer} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <ExitIcon onClick={onClose} className={styles.exitIcon}/>
        {children}
      </div>
    </div>
  );
};

export default Modal;
