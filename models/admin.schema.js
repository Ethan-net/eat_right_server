const mongoose = require("mongoose");
const { type } = require("node:os");

const adminSchema = new mongoose.Schema(
  {
    fullName: { type: String, require: true, min: 5 },
    email: { type: String, require: true },
    adminID: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("admin", adminSchema);
