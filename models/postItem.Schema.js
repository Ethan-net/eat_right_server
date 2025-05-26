const mongoose = require("mongoose");

const postItem = new mongoose.Schema({
  itemName: { type: String, require: true, min: 3 },
  description: { type: String, require: true, min: 10, max: 50 },
  available: { type: String, default: "available" },
  price: { type: Number },
  image: { type: String, require: true },
  orderNow: { type: String, require: true },
});

module.exports = mongoose.model("postItem", postItem);
