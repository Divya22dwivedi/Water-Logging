import React from "react";

function AlertBanner() {
  return (
    <div style={{
      background: "#e3f2fd",
      borderLeft: "6px solid #1e88e5",
      padding: "12px",
      marginBottom: "15px"
    }}>
      ⚠️ Heavy rainfall predicted in some wards. Stay alert.
    </div>
  );
}

export default AlertBanner;
