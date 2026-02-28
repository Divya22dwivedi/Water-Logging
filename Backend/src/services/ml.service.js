const fetch =require("node-fetch");

const getFloodRiskFromML = async ({
  rainfall_mm,
  complaints,
  low_lying,
}) => {
  const res = await fetch("http://localhost:6000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      rainfall_mm,
      complaints,
      low_lying,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("ML ERROR:", data);
    throw new Error("ML service failed: " + (data?.message || JSON.stringify(data)));
  }

  return data.risk;
};

module.exports = {
  getFloodRiskFromML,
};