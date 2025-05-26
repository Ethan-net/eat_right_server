const mongoose = require("mongoose");

const postAd = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
});

module.exports = mongoose.model("PostAd", postAd);
