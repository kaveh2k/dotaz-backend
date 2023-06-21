const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const router = require("../routers/index.router");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

module.exports = app;
