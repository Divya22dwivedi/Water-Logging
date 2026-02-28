const wards=require("../../data/wards_coordinates");
const { getLiveRain } = require("../services/weather.services.js");
const { getFloodRiskFromML } = require("../services/ml.service");
// const { sendAlert } = require("../services/alert.service");

exports.getLiveWardRisk = async (req, res) => {
  try {
    const result = [];

    for (const ward of wards) {
      console.log("Processing ward:", ward);
      const rain = await getLiveRain(ward.lat, ward.lon);

      const risk = await getFloodRiskFromML({
       
        rainfall_mm: rain.rain_1h,
        complaints: ward.complaints,
        low_lying: ward.low_lying,
      });

      // 🔔 ALERT
      // if (risk === "High") {
      //   await sendAlert(ward.wardId, risk);
      // }

      result.push({
        wardId: ward.wardId,
        name: ward.name,
        lat: ward.lat,
        lon: ward.lon,
        rainfall_mm: rain.rain_1h,
        weather: rain.weather,
        risk
      });
    }

    res.json(result);
    console.log("Ward risk data sent successfully.");

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
