const { verify } = require("crypto");
const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const authToken = req.cookies?.myToken;

  if (!authToken) {
    return res.status(402).json({
      message: "No token provided",
    });
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_TOKEN);
    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Access Denied!",
      });
    }
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = verifyAdmin;
