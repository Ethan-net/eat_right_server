const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    adminID: { type: String },
    password: { type: String, require: true },
    role: { type: String, default: "admin" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("admin", adminSchema);
