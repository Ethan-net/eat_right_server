const express = require("express");
const mongoSanitizer = require("express-mongo-sanitize");
const {
  adminSignUp,
  adminSignIn,
  logout,
} = require("../controller/admin.auth");

const uploads = require("../multer/multer.config");

const postingItems = require("../controller/postItem");
const verifyAdmin = require("../middleware/verifyAdmin");
const {
  addingTomenuList,
  deletePostItem,
  getMenuItem,
  updateMenuItem,
} = require("../controller/postmenulist");
const postAds = require("../controller/postAd");
const makeReservation = require("../controller/reservation");

const authRoute = express.Router();
const postItemRoute = express.Router();
const addTomenuList = express.Router();
const postAdvertRoute = express.Router();
const makeReservationRoute = express.Router();

authRoute.post("/signUp", adminSignUp);
authRoute.post("/signIn", adminSignIn);
authRoute.post("/logout", logout);

makeReservationRoute.post("/make_reserve", makeReservation);
postAdvertRoute.post("/post_ad", uploads.single("image"), verifyAdmin, postAds);

// MENU

addTomenuList.delete("/deletemenu/:id", verifyAdmin, deletePostItem);
addTomenuList.get("/getitems", getMenuItem);
addTomenuList.put("/update-item/:id", updateMenuItem);
addTomenuList.post(
  "/add_tomenu",
  uploads.single("image"),
  // mongoSanitizer(),
  verifyAdmin,
  addingTomenuList
);

// POST ITEM FOR ORDER
postItemRoute.post(
  "/post_item",
  uploads.single("image"),
  // mongoSanitizer(),
  verifyAdmin,
  postingItems
);

module.exports = {
  authRoute,
  postItemRoute,
  addTomenuList,
  postAdvertRoute,
  makeReservationRoute,
};
