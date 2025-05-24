const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookiePaser = require("cookie-parser");

const app = express();

app.use(cors({}));

app.use(helmet());

app.listen(7000, () => {
  console.log("you are now running on port 7000");
});
