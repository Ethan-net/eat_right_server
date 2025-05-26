const jwt = require("jsonwebtoken");

const secreteToken = process.env.JWT_Token;

const generateCookie = (res, user) => {
  const token = jwt.sign(
    { userId: user._id, userRole: user.role },
    secreteToken,
    { expiresIn: "7d" }
  );

  res.cookie("myCookie", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "Production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};

const veifyteam = (req, res, next) => {
  const AuthToken = req.cookies?.myToken;

  if (!AuthToken) {
    return res.status(400).json({
      message: "Token not available",
    });
  }

  try {
    const decoded = jwt.verify(AuthToken, secreteToken);
    if (decoded.role !== "Admin") {
      return res.status(403).json({
        message: "access denied",
      });
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({
      message: "Error processing your request",
      error: error.message,
    });
  }
};
