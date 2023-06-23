require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const router = require("../routers/index.router");

const passport = require("./passport");

// Set up Express app
const app = express();

// Set up Express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("cookie-parser")());
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

// Middleware to Routes
app.use("/", router);

module.exports = app;
