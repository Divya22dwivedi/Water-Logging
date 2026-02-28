import React from "react";

function StatCard({ label, value }) {
  return (
    <div
      style={{
        padding: "15px",
        borderRadius: "8px",
        background: "#e8f5e9",
        textAlign: "center",
        boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
      }}
    >
      <p style={{ margin: 0, color: "#2e7d32" }}>{label}</p>
      <h3 style={{ margin: "5px 0" }}>{value}</h3>
    </div>
  );
}

export default StatCard;