const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary.config");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "restaurantImages",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

module.exports = storage;
