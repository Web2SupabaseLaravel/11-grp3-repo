import React from 'react'
import styles from './Input.module.css';
const Input = ({label, type, placeholder, isRequired, name, onChange, value}) => {
  return (
    <div className={styles.inputContainer}>
        <span className={styles.label}>{label}</span>
        <input onChange={onChange} name={name} type={type} placeholder={placeholder} required={isRequired} className={styles.modalInput} value={value} />
    </div>
  )
}

export default Input;