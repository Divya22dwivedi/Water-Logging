const express = require("express");
const { getLiveRain } = require("../services/weather.services");
const wards = require("../../data/wards_coordinates");

const router = express.Router();

router.get("/ward-wise", async (req, res) => {
  try {
    const results = [];

    for (const ward of wards) {
      const rainData = await getLiveRain(ward.lat, ward.lon);

      results.push({
        wardId: ward.wardId,
        wardName: ward.name,
        lat: ward.lat,
        lon: ward.lon,
        rain_1h: rainData.rain_1h,
        rain_3h: rainData.rain_3h,
        weather: rainData.weather,
        description: rainData.description,
        timestamp: rainData.timestamp
      });
    }

    res.json(results);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
