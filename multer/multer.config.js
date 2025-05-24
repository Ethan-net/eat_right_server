const multer = require("multer");

const storage = require("../cloudinary/cloudinary.storage");

const uploads = multer({ storage });

module.exports = uploads;
