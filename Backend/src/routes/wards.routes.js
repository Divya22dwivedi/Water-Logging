const express = require("express");
const fs = require("fs");
const path =require("path");

const router = express.Router();

router.get("/wards", (req, res) => {
  const filePath = path.join(process.cwd(), "data/Delhi_Wards.geojson");
  const geojson = JSON.parse(fs.readFileSync(filePath, "utf8"));
  res.json(geojson);
});

module.exports = router;
