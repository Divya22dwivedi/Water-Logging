const express = require("express");
const  {getLiveWardRisk} = require("../controllers/ward.controllers");

const router = express.Router();

router.get("/live-risk", getLiveWardRisk);

module.exports = router;
