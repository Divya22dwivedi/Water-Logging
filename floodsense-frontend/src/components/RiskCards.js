import React from "react";
import { useNavigate } from "react-router-dom";

function RiskCards() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <div style={card("#1565c0")} onClick={() => navigate("/admin")}>
        <h3>High Risk</h3>
        <p>8 Wards</p>
      </div>

      <div style={card("#2e7d32")}>
        <h3>Medium Risk</h3>
        <p>14 Wards</p>
      </div>

      <div style={card("#4fc3f7")}>
        <h3>Low Risk</h3>
        <p>23 Wards</p>
      </div>
    </div>
  );
}

const card = (bg) => ({
  flex: 1,
  padding: "20px",
  color: "white",
  borderRadius: "10px",
  textAlign: "center",
  background: bg,
  cursor: "pointer",
});

export default RiskCards;