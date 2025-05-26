const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookiePaser = require("cookie-parser");
const databaseconnect = require("./database/database.config");

const {
  authRoute,
  postItemRoute,
  addTomenuList,
  postAdvertRoute,
} = require("./routes/routes");

require("dotenv").config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use(cookiePaser());
app.use(helmet());

app.use("/app", authRoute);
app.use("/app", postItemRoute);
app.use("/app", addTomenuList);
app.use("/app", postAdvertRoute);

databaseconnect();

app.listen(port, () => {
  console.log(`you are now running on port ${port}`);
});
