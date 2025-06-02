const jwt = require("jsonwebtoken");

require("dotenv").config();
const secreteToken = process.env.JWT_TOKEN;
const generateCookieToken = (res, user) => {
  const token = jwt.sign({ userId: user._id, role: user.role }, secreteToken, {
    expiresIn: "7d",
  });
  res.cookie("myToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return token;
};

module.exports = generateCookieToken;
