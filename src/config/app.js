const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const router = require("../routers/index.router");
const clientIp = require("../middlewares/clientIp.middleware");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(cors());

// Middleware to extract client IP address
app.use(clientIp);

// Middleware to handle Routes
app.use("/", router);

module.exports = app;
