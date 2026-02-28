const fs = require("fs");
const Complaint = require("../models/complaints.model");
const cloudinary = require("cloudinary").v2;

// Cloudinary config (runs once)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createComplaint = async (req, res) => {
  try {
    // 1️⃣ Validate file
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    // 2️⃣ Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "water_logging_reports",
      resource_type: "image",
    });

    // 3️⃣ Delete temp file (IMPORTANT)
    fs.unlink(req.file.path, () => {});

    // 4️⃣ Create DB entry
    const complaint = new Complaint({
      imageUrl: result.secure_url,
      latitude: req.body.lat,
      longitude: req.body.lng,
      time: req.body.time,
      status: "Pending",
    });

    await complaint.save();

    // 5️⃣ Response
    return res.status(201).json({
      success: true,
      message: "Complaint submitted successfully",
      data: complaint,
    });

  } catch (error) {
    console.error("Complaint upload error:", error);
    return res.status(500).json({
      success: false,
      message: "Complaint upload failed",
    });
  }
};

module.exports = { createComplaint };
