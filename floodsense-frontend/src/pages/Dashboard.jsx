import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      {/* PAGE */}
      <div style={page}>
        {/* Header */}
        <div style={header}>
          <h2 style={{ margin: 0, fontWeight: 600 }}>
            Delhi Flood Monitoring Dashboard
          </h2>
          <span style={statusBadge}>Overall City Status: MODERATE</span>
        </div>

        {/* KPI Cards */}
        <div style={grid}>
          <KpiCard
            title="Overall City Risk"
            value="Moderate Risk"
            bgColor="#fbc02d"
            textColor="#000"
          />

          <KpiCard
            title="Active Water-Logging Reports"
            value="126"
            bgColor="#1565c0"
            textColor="#fff"
          />

          <KpiCard
            title="High-Risk Wards"
            value="8"
            bgColor="#c62828"
            textColor="#fff"
          />

          <KpiCard
            title="Rainfall (Last 24 Hours)"
            value="42 mm"
            bgColor="#2e7d32"
            textColor="#fff"
          />
        </div>

        {/* Quick Alerts */}
        <div style={alertsBox}>
          <h3 style={{ marginTop: 0 }}>Quick Alerts</h3>
          <ul style={{ marginTop: 12, lineHeight: 1.8 }}>
            <li>Karol Bagh: Heavy rainfall detected</li>
            <li>Central Delhi: Sudden rise in water-logging complaints</li>
            <li>West Delhi: Drainage clearance required</li>
          </ul>
        </div>
      </div>
    </>
  );
}

/* ---------- KPI CARD COMPONENT ---------- */
function KpiCard({ title, value, bgColor, textColor }) {
  return (
    <div
      style={{
        ...card,
        background: bgColor,
        color: textColor,
      }}
    >
      <p style={cardTitle}>{title}</p>
      <h1 style={{ margin: 0 }}>{value}</h1>
    </div>
  );
}

/* ---------- STYLES ---------- */

const page = {
  padding: "32px",
  minHeight: "100vh",

  /* 🌄 background image */
  backgroundImage:
    "url('https://instasize.com/api/image/e4551e681ffad316be7d400945789f95f343103cefe3fdbcd4eb98249a5f2df3.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  /* font polish */
  fontFamily: '"Inter", "Segoe UI", Roboto, Arial, sans-serif',

  /* overlay effect via backdrop feel */
  backdropFilter: "blur(2px)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "36px",

  /* glass look */
  background: "rgba(255, 255, 255, 0.88)",
  backdropFilter: "blur(8px)",

  padding: "18px 24px",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
};

const statusBadge = {
  background: "rgba(224, 242, 254, 0.9)",
  color: "#075985",
  padding: "8px 18px",
  borderRadius: "999px",
  fontWeight: 600,
  fontSize: "13px",
  letterSpacing: "0.3px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: "24px",
  marginBottom: "40px",
};

const card = {
  padding: "26px",
  borderRadius: "20px",

  /* keep your colors but soften surface */
  boxShadow: "0 14px 34px rgba(0,0,0,0.18)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",

  /* subtle hover effect */
  cursor: "default",
};

const cardTitle = {
  marginBottom: "14px",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.4px",
  opacity: 0.95,
};

const alertsBox = {
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(8px)",
  padding: "26px",
  borderRadius: "20px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
};
