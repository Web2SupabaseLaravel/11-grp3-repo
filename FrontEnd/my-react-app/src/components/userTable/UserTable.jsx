import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../header/Header";
import styles from "./UserTable.module.css";
import DynamicTable from "../dynamicTable/DynamicTable";
import Modal from "../modal/Modal";
import UserForm from "../UserForm/UserForm";

const columns = [
  { header: "First Name", accessor: "first_name" },
  { header: "Last Name", accessor: "last_name" },
  { header: "Email", accessor: "email" },
  {
    header: "Type",
    accessor: "roles",
    render: (roles) => (roles && roles.length > 0 ? roles[0] : "N/A"),
  },
  { header: "Created At", accessor: "created_at" },
  { header: "Edited At", accessor: "updated_at" },
];

const UserTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // New state for selected user data to edit
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8888/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch users:", error);
      alert("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRowClick = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8888/api/users/${userId}`);
      setSelectedUser(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("❌ Failed to fetch user data:", error);
      alert("Error loading user data");
    }
  };

  const handleUserFormSubmit = async (formData) => {
    try {
      if (selectedUser) {
        await axios.patch(`http://127.0.0.1:8888/api/users/${selectedUser.id}`, formData);
        alert("✅ User updated!");
      } else {
        await axios.post("http://127.0.0.1:8888/api/users", formData);
        alert("✅ User added!");
      }
      setIsModalOpen(false);
      setSelectedUser(null);
      await fetchUsers();
    } catch (error) {
      console.error("❌ Failed to save user:", error);
      alert("Failed to save user. Please check input and try again.");
    }
  };

  const handleDeleteUser = async (index) => {
    const userToDelete = users[index];
    if (!userToDelete) return;

    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.splice(index, 1);
      return updatedUsers;
    });

    try {
      await axios.delete(`http://127.0.0.1:8888/api/users/${userToDelete.id}`);
    } catch (error) {
      alert("❌ Failed to delete user from server. Refreshing list...");
      console.error("❌ Backend delete failed:", error);
      await fetchUsers();
    }
  };

  const handleAddUserClick = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.userTableContainer}>
      <Header />
      <div className={styles.tableHeader}>
        <h2>All Users</h2>
        <button onClick={handleAddUserClick}>Add New User</button>
      </div>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <DynamicTable
          columns={columns}
          data={users}
          onDelete={handleDeleteUser}
          onRowClick={handleRowClick}
        />
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <UserForm
          onSubmit={handleUserFormSubmit}
          title={selectedUser ? "Edit User" : "Add New User"}
          action={selectedUser ? "Update User" : "Add User"}
          initialData={selectedUser}
        />
      </Modal>
    </div>
  );
};

export default UserTable;
