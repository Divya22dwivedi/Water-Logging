const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    imageUrl: String,
    latitude: Number,
    longitude: Number,
    time: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;