const { cloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary.config");

const storage = new cloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "restaurantImages",
    allowed_formats: ["jpeg", "png", "jpg"],
  },
});

module.exports = storage;
