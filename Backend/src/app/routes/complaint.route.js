const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { createComplaint } = require("../controllers/upload.controller");

// ✅ Multer storage (TEMP for Cloudinary)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "temp/"); // 👈 MUST exist
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "photo-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// ✅ Route
router.post(
  "/",
  upload.single("photo"), // must match FormData key
  createComplaint
);

module.exports = router;
