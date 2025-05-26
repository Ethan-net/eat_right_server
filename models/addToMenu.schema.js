const mongoose = require("mongoose");

const addtoMenu = new mongoose.Schema({
  name: { type: String, require },
  description: { type: String, require: true, min: 10, max: 50 },
  available: { type: String, default: "available" },
  price: { type: Number },
  image: { type: String },
});

module.exports = mongoose.model("addtoMenu", addtoMenu);
