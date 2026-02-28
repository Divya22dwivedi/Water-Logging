import Navbar from "../components/Navbar";
import { useState } from "react";

export default function OfficerActions() {
  const [actions, setActions] = useState([
    {
      id: 1,
      officer: "Officer A",
      ward: "Karol Bagh",
      startTime: "09 Jan 2026, 11:20 AM",
      status: "In-Progress",
      proof: "",
    },
    {
      id: 2,
      officer: "Officer B",
      ward: "Central Delhi",
      startTime: "09 Jan 2026, 09:40 AM",
      status: "Resolved",
      proof: "",
    },
  ]);

  const uploadProof = (id, file) => {
    const updated = actions.map((a) =>
      a.id === id ? { ...a, proof: URL.createObjectURL(file) } : a
    );
    setActions(updated);
  };

  return (
    <>
      <Navbar />

      <div style={page}>
        {/* Header */}
        <div style={header}>
          <h2 style={{ marginBottom: "6px", fontWeight: 600 }}>
            Officer Action Tracking
          </h2>
          <p style={{ margin: 0, color: "#475569" }}>
            Track on-ground actions taken by officers with time, status, and
            proof of work.
          </p>
        </div>

        {/* Table */}
        <div style={tableBox}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Officer</th>
                <th style={th}>Ward</th>
                <th style={th}>Action Start Time</th>
                <th style={th}>Status</th>
                <th style={th}>Proof of Work</th>
              </tr>
            </thead>
            <tbody>
              {actions.map((a) => (
                <tr key={a.id} style={tr}>
                  <td style={td}>{a.officer}</td>
                  <td style={td}>{a.ward}</td>
                  <td style={td}>{a.startTime}</td>
                  <td style={td}>
                    <span style={statusBadge(a.status)}>
                      {a.status}
                    </span>
                  </td>
                  <td style={td}>
                    {a.proof ? (
                      <img
                        src={a.proof}
                        alt="proof"
                        style={proofImg}
                      />
                    ) : (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          uploadProof(a.id, e.target.files[0])
                        }
                      />
                    )}
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
  marginBottom: "26px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
};

const tableBox = {
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(8px)",
  padding: "22px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.14)",
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

const statusBadge = (status) => ({
  padding: "6px 16px",
  borderRadius: "999px",
  color: "white",
  fontSize: "13px",
  fontWeight: 500,
  background:
    status === "Resolved"
      ? "linear-gradient(135deg, #2e7d32, #66bb6a)"
      : "linear-gradient(135deg, #f57c00, #ffb74d)",
});

const proofImg = {
  width: "60px",
  height: "60px",
  borderRadius: "10px",
  objectFit: "cover",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
};
