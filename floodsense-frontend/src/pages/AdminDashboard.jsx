import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h2>Admin Dashboard</h2>

        <div style={grid}>
          <div style={card}>
            <h3>Total Wards</h3>
            <p>272</p>
          </div>

          <div style={card}>
            <h3>Active Alerts</h3>
            <p>18</p>
          </div>

          <div style={card}>
            <h3>Field Officers</h3>
            <p>96</p>
          </div>

          <div style={card}>
            <h3>Resolved Issues</h3>
            <p>143</p>
          </div>
        </div>

        <div style={panel}>
          <h3>Admin Controls</h3>
          <ul>
            <li>Assign officers to wards</li>
            <li>View ward-wise risk history</li>
            <li>Manage alerts & escalations</li>
          </ul>
        </div>
      </div>
    </>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const card = {
  padding: "20px",
  borderRadius: "10px",
  background: "#e3f2fd",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
};

const panel = {
  marginTop: "30px",
  padding: "20px",
  borderRadius: "10px",
  background: "#e8f5e9",
};

export default AdminDashboard;