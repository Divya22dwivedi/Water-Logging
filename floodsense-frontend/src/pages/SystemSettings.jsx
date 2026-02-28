import { useState } from "react";
import Navbar from "../components/Navbar";

export default function SystemSettings() {
  const [thresholds, setThresholds] = useState({
    rainfall: 40,
    complaints: 20,
  });

  const [riskWeights, setRiskWeights] = useState({
    rainfall: 50,
    complaints: 30,
    history: 20,
  });

  const [apiStatus] = useState({
    rainfall: "Online",
    maps: "Online",
    sms: "Offline",
  });

  return (
    <>
      <Navbar />

      <div style={page}>
        {/* Header */}
        <div style={header}>
          <h2 style={{ marginBottom: "6px", fontWeight: 600 }}>
            System Settings
          </h2>
          <p style={{ margin: 0, color: "#475569" }}>
            Configure thresholds, risk logic, officer assignments, and monitor
            data sources.
          </p>
        </div>

        {/* ALERT THRESHOLDS */}
        <Section title="Alert Threshold Configuration">
          <SettingRow label="Rainfall Threshold (mm)">
            <input
              type="number"
              value={thresholds.rainfall}
              onChange={(e) =>
                setThresholds({ ...thresholds, rainfall: e.target.value })
              }
              style={input}
            />
          </SettingRow>

          <SettingRow label="Complaint Count Threshold">
            <input
              type="number"
              value={thresholds.complaints}
              onChange={(e) =>
                setThresholds({ ...thresholds, complaints: e.target.value })
              }
              style={input}
            />
          </SettingRow>
        </Section>

        {/* RISK SCORING */}
        <Section title="Risk Scoring Parameters (%)">
          <SettingRow label="Rainfall Weight">
            <input
              type="number"
              value={riskWeights.rainfall}
              onChange={(e) =>
                setRiskWeights({ ...riskWeights, rainfall: e.target.value })
              }
              style={input}
            />
          </SettingRow>

          <SettingRow label="Complaint Density Weight">
            <input
              type="number"
              value={riskWeights.complaints}
              onChange={(e) =>
                setRiskWeights({ ...riskWeights, complaints: e.target.value })
              }
              style={input}
            />
          </SettingRow>

          <SettingRow label="Historical Risk Weight">
            <input
              type="number"
              value={riskWeights.history}
              onChange={(e) =>
                setRiskWeights({ ...riskWeights, history: e.target.value })
              }
              style={input}
            />
          </SettingRow>
        </Section>

        {/* OFFICER ASSIGNMENT */}
        <Section title="Officer Assignment Controls">
          <SettingRow label="Default Officer for High-Risk Wards">
            <select style={select}>
              <option>Officer A</option>
              <option>Officer B</option>
              <option>Officer C</option>
            </select>
          </SettingRow>

          <SettingRow label="Auto-Assign Based on Ward">
            <select style={select}>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </SettingRow>
        </Section>

        {/* DATA SOURCE STATUS */}
        <Section title="Data Source & API Status">
          <StatusRow label="Rainfall API (IMD / OpenWeather)">
            <StatusBadge status={apiStatus.rainfall} />
          </StatusRow>

          <StatusRow label="GIS Map Service">
            <StatusBadge status={apiStatus.maps} />
          </StatusRow>

          <StatusRow label="SMS / WhatsApp Gateway">
            <StatusBadge status={apiStatus.sms} />
          </StatusRow>
        </Section>

        {/* EXTRA IMPORTANT SETTINGS */}
        <Section title="Operational Controls">
          <SettingRow label="Offline Data Sync">
            <select style={select}>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </SettingRow>

          <SettingRow label="Alert Auto-Escalation Time (minutes)">
            <input type="number" defaultValue={30} style={input} />
          </SettingRow>
        </Section>

        {/* SAVE BUTTON */}
        <div style={saveBox}>
          <button style={saveBtn}>Save Configuration</button>
        </div>
      </div>
    </>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Section({ title, children }) {
  return (
    <div style={section}>
      <h3 style={{ marginBottom: "16px" }}>{title}</h3>
      {children}
    </div>
  );
}

function SettingRow({ label, children }) {
  return (
    <div style={row}>
      <span>{label}</span>
      {children}
    </div>
  );
}

function StatusRow({ label, children }) {
  return (
    <div style={row}>
      <span>{label}</span>
      {children}
    </div>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      style={{
        padding: "6px 16px",
        borderRadius: "999px",
        color: "white",
        fontWeight: 500,
        fontSize: "13px",
        background:
          status === "Online"
            ? "linear-gradient(135deg, #2e7d32, #66bb6a)"
            : "linear-gradient(135deg, #c62828, #ef5350)",
      }}
    >
      {status}
    </span>
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

const section = {
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(8px)",
  padding: "22px 26px",
  borderRadius: "18px",
  marginBottom: "22px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "14px",
  fontSize: "14px",
};

const input = {
  padding: "6px 10px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
};

const select = {
  padding: "6px 10px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
};

const saveBox = {
  textAlign: "right",
  marginTop: "26px",
};

const saveBtn = {
  background: "linear-gradient(135deg, #0ea5a4, #0369a1)",
  color: "white",
  padding: "12px 26px",
  borderRadius: "14px",
  border: "none",
  fontSize: "15px",
  fontWeight: 500,
  cursor: "pointer",
  boxShadow: "0 10px 24px rgba(3,105,161,0.35)",
};
