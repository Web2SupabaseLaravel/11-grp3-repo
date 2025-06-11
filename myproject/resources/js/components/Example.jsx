import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class PasswordResetManager extends Component {
  constructor() {
    super();
    this.state = {
      resets: [],
      token: "",
      expires_at: "",
      user_id: "",
      editId: null
    };
  }

  componentDidMount() {
    this.fetchResets();
  }

  fetchResets = () => {
    axios.get("/datapassword_reset")
      .then(response => {
        this.setState({ resets: response.data });
      })
      .catch(error => {
        console.error("Error fetching resets:", error);
      });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreate = (e) => {
    e.preventDefault();
    const { token, expires_at, user_id } = this.state;
    axios.post("/datapassword_reset", { token, expires_at, user_id })
      .then(() => {
        this.setState({ token: "", expires_at: "", user_id: "" });
        this.fetchResets();
      })
      .catch(error => {
        console.error("Error creating password reset:", error);
      });
  };

  handleEdit = (id) => {
    const reset = this.state.resets.find(r => r.id === id);
    this.setState({
      editId: id,
      token: reset.token,
      expires_at: reset.expires_at,
      user_id: reset.user_id
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    const { editId, token, expires_at, user_id } = this.state;
    axios.put(`/datapassword_reset/${editId}`, { token, expires_at, user_id })
      .then(() => {
        this.setState({ editId: null, token: "", expires_at: "", user_id: "" });
        this.fetchResets();
      })
      .catch(error => {
        console.error("Error updating password reset:", error);
      });
  };

  handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this reset entry?")) {
      axios.delete(`/datapassword_reset/${id}`)
        .then(() => {
          this.fetchResets();
        })
        .catch(error => {
          console.error("Error deleting password reset:", error);
        });
    }
  };

  handleCancel = () => {
    this.setState({ editId: null, token: "", expires_at: "", user_id: "" });
  };

  render() {
    const { resets, token, expires_at, user_id, editId } = this.state;

    return (
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", color: "#2c3e50" }}>Password Reset Manager</h2>

          <form onSubmit={editId ? this.handleUpdate : this.handleCreate} style={{ marginBottom: "2rem" }}>
            <input type="text" name="token" value={token} onChange={this.handleInputChange} placeholder="Token" required style={{ marginRight: "10px", padding: "8px" }} />
            <input type="datetime-local" name="expires_at" value={expires_at} onChange={this.handleInputChange} required style={{ marginRight: "10px", padding: "8px" }} />
            <input type="number" name="user_id" value={user_id} onChange={this.handleInputChange} placeholder="User ID" required style={{ marginRight: "10px", padding: "8px" }} />
            <button type="submit" style={{ padding: "8px 16px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "4px" }}>{editId ? "Update" : "Create"}</button>
            {editId && (
              <button type="button" onClick={this.handleCancel} style={{ marginLeft: "10px", padding: "8px 16px", backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "4px" }}>Cancel</button>
            )}
          </form>

          <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", backgroundColor: "#ecf0f1" }}>
            <thead>
              <tr style={{ backgroundColor: "#34495e", color: "white" }}>
                <th>ID</th>
                <th>Token</th>
                <th>Expires At</th>
                <th>User ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {resets.map(reset => (
                <tr key={reset.id}>
                  <td>{reset.id}</td>
                  <td>{reset.token}</td>
                  <td>{reset.expires_at}</td>
                  <td>{reset.user_id}</td>
                  <td>
                    <button onClick={() => this.handleEdit(reset.id)} style={{ marginRight: "5px", padding: "4px 10px", backgroundColor: "#2ecc71", color: "white", border: "none", borderRadius: "3px" }}>Edit</button>
                    <button onClick={() => this.handleDelete(reset.id)} style={{ padding: "4px 10px", backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "3px" }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

if (document.getElementById("example")) {
  ReactDOM.render(<PasswordResetManager />, document.getElementById("example"));
}
