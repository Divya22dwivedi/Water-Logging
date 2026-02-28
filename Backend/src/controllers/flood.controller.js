const { getFloodRiskFromML }=require("../services/ml.service.js");

const getWardFloodRisk = async (req, res) => {
  try {
    // normally DB / API se aayega
    const rainfall_mm = 110;
    const complaints = 55;
    const low_lying = 1;

    const risk = await getFloodRiskFromML({
      rainfall_mm,
      complaints,
      low_lying,
    });

    res.json({
      wardId: "KB-12",
      risk,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getWardFloodRisk,
};