const mongoose = require("mongoose");
require("dotenv").config();
const Db_string = process.env.DBSTRING;

const databaseconnect = async () => {
  try {
    console.log("connecting to database");
    await mongoose.connect(Db_string, {});
    console.log("connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = databaseconnect;
