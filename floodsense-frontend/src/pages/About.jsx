import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div style={page}>
        {/* Header */}
        <div style={header}>
          <h2 style={{ marginBottom: "6px", fontWeight: 600 }}>
            About FloodSense – Smart Water-Logging Monitoring System
          </h2>
          <p style={{ margin: 0, color: "#475569" }}>
            A data-driven platform to enhance monsoon preparedness and urban
            flood response for Delhi.
          </p>
        </div>

        {/* Objective */}
        <Section title="Project Objective & Vision">
          <p>
            FloodSense aims to proactively identify and monitor water-logging
            hotspots across Delhi using real-time rainfall data, citizen
            reports, and historical flood patterns. The vision is to enable
            municipal authorities to take early, informed action before
            flooding escalates into city-wide disruption.
          </p>
          <p>
            By combining GIS visualization, predictive risk scoring, and
            operational dashboards, the system shifts flood management from a
            reactive to a preventive approach.
          </p>
        </Section>

        {/* Data Sources */}
        <Section title="Data Sources Used">
          <ul>
            <li>Rainfall data from IMD / OpenWeather APIs</li>
            <li>Citizen-submitted water-logging reports (geo-tagged)</li>
            <li>Field officer action updates</li>
            <li>Historical flood and drainage datasets</li>
            <li>OpenStreetMap (OSM) for base maps and road networks</li>
          </ul>
        </Section>

        {/* Tech Stack */}
        <Section title="Technology Stack">
          <ul>
            <li><strong>Frontend:</strong> React.js, HTML5, CSS3</li>
            <li><strong>Maps & GIS:</strong> Leaflet, OpenStreetMap, GeoJSON</li>
            <li><strong>Analytics & Charts:</strong> Recharts</li>
            <li><strong>Backend:</strong> Node.js, REST APIs</li>
            <li>
              <strong>Notifications:</strong> SMS / WhatsApp Gateway (planned)
            </li>
          </ul>
        </Section>

        {/* Team */}
        <Section title="Team & Contributors">
          <ul>
            <li>
              <strong>Team Name:</strong> Vision Coders
            </li>
            <li>
              <strong>Frontend Development:</strong> Divya Dwivedi, Suhani Kumri
            </li>
            <li>
              <strong>Backend Development:</strong> Ayush Kumar, Bipul Kumar,
              Sujit Soni
            </li>
          </ul>
        </Section>
      </div>
    </>
  );
}

/* ---------- SMALL COMPONENT ---------- */

function Section({ title, children }) {
  return (
    <div style={section}>
      <h3 style={{ marginBottom: "14px", fontWeight: 600 }}>{title}</h3>
      {children}
    </div>
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
  lineHeight: "1.75",
};
