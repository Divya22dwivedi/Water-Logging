import React from "react";

const wards = [
  { name: "Karol Bagh", risk: "High" },
  { name: "Central Delhi", risk: "Medium" },
  { name: "East Delhi", risk: "Low" },
];

function WardList() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Ward-wise Risk List</h3>
      <ul style={{ paddingLeft: "20px" }}>
        {wards.map((w, i) => (
          <li key={i}>
            <b>{w.name}</b> — {w.risk} Risk
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WardList;