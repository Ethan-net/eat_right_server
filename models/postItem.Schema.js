const mongoose = require("mongoose");

const postItem = new mongoose.Schema({
  name: { type: String, require },
  description: { type: String, require: true, min: 10, max: 50 },
  available: { default: false },
  price: { type: String },
  orderNow: { type: String, require: true },
});

module.exports = mongoose.model("postItem", postItems);
