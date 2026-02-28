const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  const { govtId, otp } = req.body;

  // simple validation
  if (!govtId || !otp) {
    return res.status(400).json({
      message: "Govt ID and OTP required",
    });
  }

  // dummy OTP check (replace with DB later)
  if (otp !== "123456") {
    return res.status(401).json({
      message: "Invalid OTP",
    });
  }

  // success
  res.json({
    message: "Login successful",
    user: {
      govtId,
      role: "admin",
    },
  });
});

module.exports = router;
