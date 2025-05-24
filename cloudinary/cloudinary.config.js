const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secrete: "",
});

module.exports = cloudinary;
