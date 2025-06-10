import React, { useState, useEffect } from "react";
import styles from "./UserForm.module.css";
import Input from "../input/Input";
import SelectType from "../selectType/SelectType";

const UserForm = ({ onSubmit, title, action, initialData }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    if (initialData) {
      console.log("🧪 initialData received by UserForm:", initialData);
      const firstRole = initialData.roles?.[0];
      console.log(initialData.first_name);
      setFormData({
        first_name: initialData.first_name || "",
        last_name: initialData.last_name || "",
        email: initialData.email || "",
        password: "",
        role: firstRole?.name || "",
      });
    } else {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        role: "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (e) => {
    setFormData((prev) => ({ ...prev, role: e.target.value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const dataToSend = { ...formData };

  if (!dataToSend.password) {
    delete dataToSend.password;
  }

  onSubmit(dataToSend);
};


  return (
    <div>
      <h2 className={styles.formTitle}>{title}</h2>
      <hr />
      <form className={styles.userForm} onSubmit={handleSubmit}>
        <Input
          label="First Name"
          type="text"
          placeholder="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <Input
          label="Last Name"
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required={!initialData}
        />
        <SelectType
          value={formData.role}
          onChange={handleRoleChange}
          required
        />
        <button type="submit" className={styles.submitButton}>
          {action}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
