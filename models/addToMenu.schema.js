const mongoose = require("mongoose");

const addtoMenu = new mongoose.Schema({
  name: { type: String, require },
  description: { type: String, require: true, min: 10, max: 50 },
  available: { default: false },
  price: { type: String },
});

module.exports = mongoose.model("addtoMenu", addtoMenu);
