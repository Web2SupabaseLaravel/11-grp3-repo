import React from "react";
import styles from "./SelectType.module.css";

const typeOptions = [
  { value: "", label: "Select Type" },
  { value: "Patient", label: "Patient" },
  { value: "Doctor", label: "Doctor" },
  { value: "Nurse", label: "Nurse" },
];

const SelectType = ({ label = "Type", value, onChange, required = true, name }) => {
  return (
    <div className={styles.selectWrapper}>
      <span className={styles.label}>{label}</span>
      <select
        className={styles.select}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      >
        {typeOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectType;
