const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookiePaser = require("cookie-parser");
const databaseconnect = require("./database/database.config");
require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.use(cors({}));

app.use(helmet());

databaseconnect();

app.listen(port, () => {
  console.log(`you are now running on port ${port}`);
});
