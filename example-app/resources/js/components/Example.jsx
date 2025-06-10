import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class ServiceManager extends Component {
  constructor() {
    super();
    this.state = {
      services: [],
      name: "",
      duration: "",
      fee: "",
      editId: null
    };
  }

  componentDidMount() {
    this.fetchServices();
  }

  fetchServices = () => {
    axios.get("/dataservice")
      .then(response => {
        this.setState({ services: response.data });
      })
      .catch(error => {
        console.error("Error fetching services:", error);
      });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreate = (e) => {
    e.preventDefault();
    const { name, duration, fee } = this.state;
    axios.post("/dataservice/create", { name, duration, fee })
      .then(() => {
        this.setState({ name: "", duration: "", fee: "" });
        this.fetchServices();
      })
      .catch(error => {
        console.error("Error creating service:", error);
      });
  };

  handleEdit = (id) => {
    const service = this.state.services.find(s => s.service_id === id);
    this.setState({
      editId: id,
      name: service.name,
      duration: service.duration,
      fee: service.fee
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    const { editId, name, duration, fee } = this.state;
    axios.put(`/dataservice/${editId}`, { name, duration, fee })
      .then(() => {
        this.setState({ editId: null, name: "", duration: "", fee: "" });
        this.fetchServices();
      })
      .catch(error => {
        console.error("Error updating service:", error);
      });
  };

  handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      axios.delete(`/dataservice/${id}`)
        .then(() => {
          this.fetchServices();
        })
        .catch(error => {
          console.error("Error deleting service:", error);
        });
    }
  };

  handleCancel = () => {
    this.setState({ editId: null, name: "", duration: "", fee: "" });
  };

  render() {
    const { services, name, duration, fee, editId } = this.state;

    const styles = {
        appContainer: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "2rem"
      },
      glassPanel: {
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        padding: "2rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        maxWidth: "1200px",
        margin: "0 auto"
      },
      title: {
        color: "#2d3748",
        textAlign: "center",
        marginBottom: "2rem",
        fontSize: "2.5rem",
        fontWeight: "600",
        background: "linear-gradient(90deg, #2a7fba, #3ab795)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      },
      formContainer: {
        background: "rgba(255, 255, 255, 0.7)",
        padding: "1.5rem",
        borderRadius: "15px",
        marginBottom: "2rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
      },
      formInput: {
        padding: "0.8rem 1rem",
        margin: "0 10px 10px 0",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        background: "rgba(255, 255, 255, 0.8)",
        fontSize: "1rem",
        transition: "all 0.3s ease",
        width: "200px",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)"
      },
      table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: "0",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
      },
      tableHeader: {
        background: "#2a7fba", 
        color: "white",
        padding: "1rem 1.5rem",
        textAlign: "left",
        fontWeight: "500",
        borderRight: "1px solid rgba(255,255,255,0.2)"
      },
      tableCell: {
        padding: "1rem 1.5rem",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        borderRight: "1px solid rgba(0, 0, 0, 0.08)", 
        background: "rgba(255, 255, 255, 0.7)"
      },
      lastCell: {
        borderRight: "none" 
      },
      actionCell: {
        display: "flex",
        gap: "0.5rem"
      },
      submitButton: {
         background: "#2a7fba",
        color: "white",
        padding: "0.8rem 1.5rem",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "2rem",
        marginRight: "1rem",
        fontWeight: "500",
        transition: "all 0.2s",
        "&:hover": {
          background: "#1e6ea8",
          transform: "translateY(-1px)"
        }

      },
      editButton: {
        background: "#4CAF50", 
        color: "white",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "500",
        transition: "all 0.2s",
        "&:hover": {
          background: "#3e8e41",
          transform: "translateY(-1px)"
        }
      },
       cancelButton: {
        background: "#f44336",
        color: "white",
        padding: "0.8rem 1.5rem",     
        border: "none",
        borderRadius: "8px",           
        cursor: "pointer",
        fontWeight: "500",
        marginTop: "2rem",             
        transition: "all 0.2s",
        "&:hover": {
          background: "#d32f2f",
          transform: "translateY(-1px)"
                  }
      },
      deleteButton: {
        background: "#f44336",
        color: "white",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "500",
        transition: "all 0.2s",
        "&:hover": {
          background: "#d32f2f",
          transform: "translateY(-1px)"
        }
      },
      backButton: {
        background: "#2a7fba",
        color: "white",
        padding: "0.8rem 1.5rem",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "2rem",
        fontWeight: "500",
        transition: "all 0.2s",
        "&:hover": {
          background: "#1e6ea8",
          transform: "translateY(-1px)"
        }

      }
      
    };

    return (
      <div style={styles.appContainer}>
        <div style={styles.glassPanel}>
          <h1 style={styles.title}>Service Management</h1>

          <div style={styles.formContainer}>
            <form onSubmit={editId ? this.handleUpdate : this.handleCreate}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleInputChange}
                placeholder="Service Name"
                style={styles.formInput}
                required
              />
              <input
                type="text"
                name="duration"
                value={duration}
                onChange={this.handleInputChange}
                placeholder="Duration (mins)"
                style={styles.formInput}
                required
              />
              <input
                type="text"
                name="fee"
                value={fee}
                onChange={this.handleInputChange}
                placeholder="Fee ($)"
                style={styles.formInput}
                required
              />
              <button 
                type="submit" 
                style={styles.submitButton}
                onMouseOver={e => e.currentTarget.style.transform = styles.hoverEffect.transform}
                onMouseOut={e => e.currentTarget.style.transform = ""}
                onMouseDown={e => e.currentTarget.style.transform = styles.activeEffect.transform}
                onMouseUp={e => e.currentTarget.style.transform = ""}
              >
                {editId ? "Update Service" : "Create Service"}
              </button>
              {editId && (
                <button 
                  type="button" 
                  onClick={this.handleCancel}
                  style={styles.cancelButton}
                  onMouseOver={e => e.currentTarget.style.transform = styles.hoverEffect.transform}
                  onMouseOut={e => e.currentTarget.style.transform = ""}
                  onMouseDown={e => e.currentTarget.style.transform = styles.activeEffect.transform}
                  onMouseUp={e => e.currentTarget.style.transform = ""}
                >
                  Cancel
                </button>
              )}
            </form>
          </div>


           <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Name</th>
                  <th style={styles.tableHeader}>Duration</th>
                  <th style={styles.tableHeader}>Fee</th>
                  <th style={{...styles.tableHeader, ...styles.lastCell}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={service.service_id}>
                    <td style={{...styles.tableCell, ...(index % 2 === 0 ? {background: "rgba(255, 255, 255, 0.85)"} : {})}}>
                      {service.name}
                    </td>
                    <td style={{...styles.tableCell, ...(index % 2 === 0 ? {background: "rgba(255, 255, 255, 0.85)"} : {})}}>
                      {service.duration} mins
                    </td>
                    <td style={{...styles.tableCell, ...(index % 2 === 0 ? {background: "rgba(255, 255, 255, 0.85)"} : {})}}>
                      ${service.fee}
                    </td>
                    <td style={{
                      ...styles.tableCell, 
                      ...styles.lastCell,
                      ...styles.actionCell,
                      ...(index % 2 === 0 ? {background: "rgba(255, 255, 255, 0.85)"} : {})
                    }}>
                      <button 
                        onClick={() => this.handleEdit(service.service_id)}
                        style={styles.editButton}
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => this.handleDelete(service.service_id)}
                        style={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button 
            onClick={() => window.history.back()} 
            style={styles.backButton}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }
}
if (document.getElementById("example")) {
  ReactDOM.render(<ServiceManager />, document.getElementById("example"));
}