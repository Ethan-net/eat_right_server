const mongoose = require("mongoose");

const reservation = new mongoose.Schema(
  {
    name: { type: String, require: true, max: 30 },
    contact: { type: String, require: true },
    purpose: { type: String, require: true, min: 20 },
    date: { type: Date },
    time: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("reservation", reservation);
