const express = require("express");
const mongoSanitizer = require("express-mongo-sanitize");
const { adminSignUp, adminSignIn } = require("../controller/admin.auth");

const uploads = require("../multer/multer.config");

const postingItems = require("../controller/postItem");
const verifyAdmin = require("../middleware/verifyAdmin");
const addingTomenuList = require("../controller/postmenulist");

const authRoute = express.Router();
const postItemRoute = express.Router();
const addTomenuList = express.Router();

authRoute.post("/signUp", adminSignUp);
authRoute.post("/signIn", adminSignIn);

postItemRoute.post(
  "/post_item",
  uploads.single("image"),
  mongoSanitizer(),
  verifyAdmin,
  postingItems
);
addTomenuList.post(
  "/add_tomenu",
  uploads.single("image"),
  mongoSanitizer(),
  verifyAdmin,
  addingTomenuList
);

module.exports = { authRoute, postItemRoute, addTomenuList };
