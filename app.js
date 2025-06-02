const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookiePaser = require("cookie-parser");
const databaseconnect = require("./database/database.config");
const bodyParser = require("body-parser");

const {
  authRoute,
  postItemRoute,
  addTomenuList,
  postAdvertRoute,
  makeReservationRoute,
} = require("./routes/routes");

require("dotenv").config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://eat-right-admin.vercel.app", "http://localhost:5173"],

    credentials: true,
  })
);

app.use(cookiePaser());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

app.use("/app", authRoute);
app.use("/app", postItemRoute);
app.use("/app", addTomenuList);
app.use("/app", postAdvertRoute);
app.use("/app", makeReservationRoute);

databaseconnect();

app.listen(port, () => {
  console.log(`you are now running on port ${port}`);
});
