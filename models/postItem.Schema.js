const mongoose = require("mongoose");

const postItem = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true, min: 10, max: 50 },
  available: { type: String, default: "available" },
  price: { type: String },
  image: { type: String, require: true },
  orderNow: { type: String, require: true },
});

module.exports = mongoose.model("postItem", postItem);
