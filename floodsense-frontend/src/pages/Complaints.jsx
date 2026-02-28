import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Complaints() {
  const [filter, setFilter] = useState("All");

  const complaints = [
    {
      id: 1,
      ward: "Karol Bagh",
      severity: "High",
      status: "New",
      officer: "Officer A",
      time: "09 Jan 2026, 10:20 AM",
      photo: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      ward: "Central Delhi",
      severity: "Medium",
      status: "In-Progress",
      officer: "Officer B",
      time: "09 Jan 2026, 09:10 AM",
      photo: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      ward: "West Delhi",
      severity: "Low",
      status: "Resolved",
      officer: "Officer C",
      time: "08 Jan 2026, 06:45 PM",
      photo: "https://via.placeholder.com/80",
    },
  ];

  const filteredComplaints =
    filter === "All"
      ? complaints
      : complaints.filter((c) => c.status === filter);

  return (
    <>
      <Navbar />

      <div style={page}>
        {/* Header */}
        <div style={header}>
          <h2 style={{ marginBottom: "6px", fontWeight: 600 }}>
            Citizen Complaints & Reports Management
          </h2>
          <p style={{ margin: 0, color: "#475569" }}>
            Monitor, track, and manage water-logging complaints received from
            citizens across Delhi wards.
          </p>
        </div>

        {/* Filters */}
        <div style={filters}>
          <label style={{ fontSize: "14px", fontWeight: 500 }}>
            Filter by Status:&nbsp;
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={select}
            >
              <option>All</option>
              <option>New</option>
              <option>In-Progress</option>
              <option>Resolved</option>
            </select>
          </label>
        </div>

        {/* Complaints Table */}
        <div style={tableWrapper}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Ward</th>
                <th style={th}>Severity</th>
                <th style={th}>Status</th>
                <th style={th}>Assigned Officer</th>
                <th style={th}>Timestamp</th>
                <th style={th}>Photo</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((c) => (
                <tr key={c.id} style={tr}>
                  <td style={td}>{c.ward}</td>
                  <td style={td}>
                    <span style={severityBadge(c.severity)}>
                      {c.severity}
                    </span>
                  </td>
                  <td style={td}>
                    <span style={statusBadge(c.status)}>{c.status}</span>
                  </td>
                  <td style={td}>{c.officer}</td>
                  <td style={td}>{c.time}</td>
                  <td style={td}>
                    <img
                      src={c.photo}
                      alt="complaint"
                      style={{
                        borderRadius: "8px",
                        width: "60px",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  marginBottom: "24px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
};

const filters = {
  marginBottom: "20px",
  background: "rgba(255,255,255,0.9)",
  backdropFilter: "blur(8px)",
  padding: "14px 18px",
  borderRadius: "14px",
  width: "fit-content",
  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
};

const select = {
  padding: "6px 10px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
};

const tableWrapper = {
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(8px)",
  padding: "20px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  overflowX: "auto",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: "12px",
  fontSize: "13px",
  color: "#334155",
  borderBottom: "1px solid #e5e7eb",
};

const tr = {
  transition: "background 0.2s ease",
};

const td = {
  padding: "12px",
  fontSize: "14px",
  borderBottom: "1px solid #f1f5f9",
};

const severityBadge = (severity) => ({
  padding: "6px 14px",
  borderRadius: "999px",
  color: "white",
  fontSize: "13px",
  fontWeight: 500,
  background:
    severity === "High"
      ? "#c62828"
      : severity === "Medium"
      ? "#f9a825"
      : "#2e7d32",
});

const statusBadge = (status) => ({
  padding: "6px 14px",
  borderRadius: "999px",
  color: "white",
  fontSize: "13px",
  fontWeight: 500,
  background:
    status === "New"
      ? "#1565c0"
      : status === "In-Progress"
      ? "#f57c00"
      : "#2e7d32",
});
