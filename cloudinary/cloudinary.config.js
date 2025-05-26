const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const cloudName = process.env.CLOUD_NAME;
const apiKey = process.env.API_KEY;
const apisecret = process.env.API_SECRET;
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apisecret,
});

module.exports = cloudinary;
