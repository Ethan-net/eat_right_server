const adminSchema = require("../models/admin.schema");
const bcrypt = require("bcrypt");
const generateCookieToken = require("../utils/generateToken");

const adminSignUp = async (req, res) => {
  const { name, email, adminID, password } = req.body;

  try {
    const verifyAdmin = await adminSchema.findOne({ email });
    if (verifyAdmin) {
      return res.status(400).json({
        message: "Admin exist, try Logging in",
      });
    }

    const uniquePassword = await bcrypt.hash(password, 10);
    const admin_Id = "ER-" + name.split("").slice(0, 2).join("") + 2025;

    const admin = new adminSchema({
      name,
      email,
      adminID: admin_Id,
      password: uniquePassword,
    });
    await admin.save();

    res.status(200).json({
      message: "Sign Up Successfully",
    });
  } catch (error) {
    res.status(402).json({
      message: " Problem creaating Admin Account, Try again Later",
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

module.exports = { adminSignUp, adminSignIn };
