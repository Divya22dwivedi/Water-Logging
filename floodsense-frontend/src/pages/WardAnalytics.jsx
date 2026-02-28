import Navbar from "../components/Navbar";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function WardAnalytics() {
  /* ----------- DATA ----------- */

  const floodProneWards = [
    { ward: "Karol Bagh", reports: 45 },
    { ward: "Central Delhi", reports: 32 },
    { ward: "West Delhi", reports: 28 },
    { ward: "South Delhi", reports: 21 },
  ];

  const complaintTrend = [
    { day: "Mon", complaints: 18 },
    { day: "Tue", complaints: 25 },
    { day: "Wed", complaints: 30 },
    { day: "Thu", complaints: 22 },
    { day: "Fri", complaints: 35 },
  ];

  const rainfallVsFlood = [
    { rainfall: 10, flooding: 5 },
    { rainfall: 20, flooding: 12 },
    { rainfall: 30, flooding: 22 },
    { rainfall: 40, flooding: 35 },
    { rainfall: 50, flooding: 48 },
  ];

  const resolutionStats = [
    { name: "Under 6 hrs", value: 40 },
    { name: "6–12 hrs", value: 35 },
    { name: "12–24 hrs", value: 20 },
    { name: "Over 24 hrs", value: 5 },
  ];

  const COLORS = ["#2e7d32", "#1565c0", "#f9a825", "#c62828"];

  return (
    <>
      <Navbar />

      <div style={page}>
        {/* Header */}
        <div style={header}>
          <h2 style={{ marginBottom: "6px", fontWeight: 600 }}>
            Ward & City Analytics
          </h2>
          <p style={{ margin: 0, color: "#475569" }}>
            Analytical insights to identify flood-prone wards, complaint trends,
            rainfall correlation, and response efficiency.
          </p>
        </div>

        {/* GRID */}
        <div style={grid}>
          <ChartBox title="Top Flood-Prone Wards">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={floodProneWards}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ward" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="reports" fill="#c62828" />
              </BarChart>
            </ResponsiveContainer>
          </ChartBox>

          <ChartBox title="Complaint Trend Analysis">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={complaintTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="complaints"
                  stroke="#1565c0"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartBox>

          <ChartBox title="Rainfall vs Flooding Correlation">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={rainfallVsFlood}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="rainfall"
                  label={{
                    value: "Rainfall (mm)",
                    position: "insideBottom",
                    offset: -5,
                  }}
                />
                <YAxis
                  label={{
                    value: "Flood Reports",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="flooding"
                  stroke="#2e7d32"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartBox>

          <ChartBox title="Resolution Time Statistics">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={resolutionStats}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label
                >
                  {resolutionStats.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartBox>
        </div>
      </div>
    </>
  );
}

/* ---------- SMALL COMPONENT ---------- */

function ChartBox({ title, children }) {
  return (
    <div style={chartBox}>
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

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
  gap: "24px",
};

const chartBox = {
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(8px)",
  padding: "22px 24px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
};
