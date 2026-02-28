const express = require("express");
const { getWardFloodRisk }=require("../controllers/flood.controller.js");

const router = express.Router();

router.get("/ward/:id", getWardFloodRisk);

module.exports = router;
