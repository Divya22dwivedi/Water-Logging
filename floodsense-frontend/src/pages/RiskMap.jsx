import Navbar from "../components/Navbar";
import LiveFloodMap from "../components/LiveFloodMap";

export default function RiskMap() {
  return (
    <>
      <Navbar />

      <div style={page}>
        {/* Page Header */}
        <div style={header}>
          <h2 style={{ margin: 0, fontWeight: 600 }}>
            Live Flood Risk & GIS View – Delhi
          </h2>
          <p style={subText}>
            Interactive map showing ward boundaries, flood-risk zones, and
            citizen-reported water-logging locations.
          </p>
        </div>

        {/* Legend */}
        <div style={legend}>
          <LegendItem color="red" label="High Flood Risk Zone" />
          <LegendItem color="orange" label="Moderate Flood Risk Zone" />
          <LegendItem color="blue" label="Citizen Complaint Location" />
        </div>

        {/* Live Map */}
        <div style={mapWrapper}>
          <LiveFloodMap />
        </div>
      </div>
    </>
  );
}

/* ---------- Small Components ---------- */

function LegendItem({ color, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span
        style={{
          width: "14px",
          height: "14px",
          background: color,
          borderRadius: "50%",
          display: "inline-block",
        }}
      ></span>
      <span>{label}</span>
    </div>
  );
}

/* ---------- Styles ---------- */

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
  marginBottom: "20px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
};

const subText = {
  marginTop: "6px",
  color: "#475569",
  fontSize: "14px",
};

const legend = {
  background: "rgba(255,255,255,0.9)",
  backdropFilter: "blur(8px)",
  padding: "14px 18px",
  borderRadius: "16px",
  display: "flex",
  gap: "24px",
  alignItems: "center",
  marginBottom: "18px",
  boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
  fontSize: "14px",
};

const mapWrapper = {
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(6px)",
  padding: "14px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.14)",
};
