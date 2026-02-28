import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Alerts() {
  const [showHistory, setShowHistory] = useState(false);

  // Active Alerts (Live)
  const activeAlerts = [
    {
      id: 1,
      ward: "Karol Bagh",
      level: "High",
      reason: "Rainfall > 45 mm and multiple water-logging complaints",
      time: "09 Jan 2026, 11:05 AM",
    },
    {
      id: 2,
      ward: "Central Delhi",
      level: "Moderate",
      reason: "Sudden spike in citizen complaints",
      time: "09 Jan 2026, 10:30 AM",
    },
  ];

  // Alert History (Past)
  const alertHistory = [
    {
      id: 3,
      ward: "West Delhi",
      level: "High",
      reason: "Drainage blockage reported",
      time: "08 Jan 2026, 07:15 PM",
    },
    {
      id: 4,
      ward: "South Delhi",
      level: "Moderate",
      reason: "Continuous rainfall for 3 hours",
      time: "08 Jan 2026, 05:40 PM",
    },
  ];

  return (
    <>
      <Navbar />

      <div style={page}>
        {/* Header */}
        <div style={header}>
          <h2 style={{ marginBottom: "6px", fontWeight: 600 }}>
            Alerts & Early Warnings
          </h2>
          <p style={{ margin: 0, color: "#475569" }}>
            Ward-wise flood alerts triggered using rainfall thresholds and
            complaint analysis.
          </p>
        </div>

        {/* Active Alerts */}
        <h3 style={{ marginBottom: "14px" }}>Active Alerts</h3>

        {activeAlerts.map((a) => (
          <div key={a.id} style={alertCard(a.level)}>
            <div>
              <h4 style={{ margin: "0 0 6px 0" }}>{a.ward}</h4>
              <p style={{ margin: "0 0 6px 0" }}>
                <strong>Trigger:</strong> {a.reason}
              </p>
              <p style={timeText}>Issued at: {a.time}</p>
            </div>

            <span style={riskBadge(a.level)}>{a.level} Risk</span>
          </div>
        ))}

        {/* History Toggle */}
        <div style={historyBox}>
          <button
            style={toggleBtn}
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? "Hide Alert History" : "View Alert History"}
          </button>

          {showHistory && (
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Ward</th>
                  <th style={th}>Risk Level</th>
                  <th style={th}>Trigger Reason</th>
                  <th style={th}>Issued Time</th>
                </tr>
              </thead>
              <tbody>
                {alertHistory.map((h) => (
                  <tr key={h.id}>
                    <td style={td}>{h.ward}</td>
                    <td style={td}>
                      <span style={riskBadge(h.level)}>{h.level}</span>
                    </td>
                    <td style={td}>{h.reason}</td>
                    <td style={td}>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

/* ---------- STYLES ---------- */

const page = {
  padding: "32px",
  minHeight: "100vh",
  backgroundImage:
    "url('https://instasize.com/api/image/e4551e681ffad316be7d400945789f95f343103cefe3fdbcd4eb98249a5f2df3.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  fontFamily: '"Inter", "Segoe UI", Roboto, Arial, sans-serif',
};

const header = {
  background: "rgba(255,255,255,0.88)",
  backdropFilter: "blur(8px)",
  padding: "20px 24px",
  borderRadius: "18px",
  marginBottom: "28px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
};

const alertCard = (level) => ({
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(8px)",
  padding: "20px 22px",
  borderRadius: "18px",
  marginBottom: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 12px 30px rgba(0,0,0,0.14)",
  borderLeft:
    level === "High"
      ? "6px solid #c62828"
      : "6px solid #f9a825",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
});

const riskBadge = (level) => ({
  padding: "6px 16px",
  borderRadius: "999px",
  color: "white",
  fontWeight: 600,
  fontSize: "13px",
  background:
    level === "High"
      ? "linear-gradient(135deg, #c62828, #ef5350)"
      : "linear-gradient(135deg, #fbc02d, #fff176)",
});

const timeText = {
  fontSize: "13px",
  color: "#475569",
};

const historyBox = {
  marginTop: "32px",
  background: "rgba(255,255,255,0.9)",
  backdropFilter: "blur(8px)",
  padding: "22px 26px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
};

const toggleBtn = {
  background: "linear-gradient(135deg, #0ea5a4, #0369a1)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  marginBottom: "18px",
  fontWeight: 500,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: "10px",
  fontSize: "13px",
  color: "#334155",
  borderBottom: "1px solid #e5e7eb",
};

const td = {
  padding: "10px",
  fontSize: "14px",
  borderBottom: "1px solid #f1f5f9",
};
