function DashboardCard({ title, value, unit, color }) {
  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      margin: "10px",
      borderRadius: "12px",
      width: "220px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ color }}>{title}</h3>
      <h1>{value} {unit}</h1>
    </div>
  );
}

export default DashboardCard;

