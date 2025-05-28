const adminSchema = require("../models/admin.schema");
const bcrypt = require("bcrypt");
const adminValidation = require("../Validation/admin.validation");

const generateCookieToken = require("../utils/generateToken");

const adminSignUp = async (req, res) => {
  const { error, value } = adminValidation.validate(req.body);
  // const { name, email, password } = req.body;

  if (error) {
    return res.send("Error Processing request");
  }
  try {
    const verifyAdmin = await adminSchema.findOne({ email: value.email });
    if (verifyAdmin) {
      return res.status(400).json({
        message: "Admin exist, try Logging in",
      });
    }

    const uniquePassword = await bcrypt.hash(value.password, 10);
    const admin_Id = "ER-" + value.name.split("").slice(0, 3).join("") + 2025;

    const admin = new adminSchema({
      name: value.name,
      email: value.email,
      adminID: admin_Id,
      password: uniquePassword,
    });
    await admin.save();

    res.status(200).json({
      message: "Sign Up Successfully",
      userId: `Your user ID is ${admin_Id}`,
    });
  } catch (error) {
    res.status(400).json({
      message: " Problem creaating Admin Account, Try again Later",
      error: error.message,
    });
  }
};

const adminSignIn = async (req, res) => {
  const { adminID, password } = req.body;
  try {
    const userAdmin = await adminSchema.findOne({ adminID });
    if (!userAdmin) {
      return res.status(500).json({
        message: "This Admin does not exist",
      });
    }
    const checkpass = await bcrypt.compare(password, userAdmin.password);

    if (!checkpass) {
      return res.status(501).json({
        message: "password Incorrect",
      });
    }
    generateCookieToken(res, userAdmin);
    res.status(200).json({
      message: "You Have signed In successfully",
      user: { ...userAdmin._doc, password: undefined },
    });
  } catch (error) {
    res.status(502).json({
      message: "unable to log in",
    });
    console.log(error);
  }
};

const logout = async (req, res) => {
  res.clearCookie("myToken", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  res.send("Logged out");
};

module.exports = { adminSignUp, adminSignIn, logout };
