require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const router = require("../routers/index.router");
const clientIp = require("../middlewares/clientIp.middleware");
const session = require("express-session");
const generateRandomSecret = require("../services/RandomSecret.service");
const sessionSecret = generateRandomSecret();
const passport = require("./passport");

// Set up Express app
const app = express();

// Set up Express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("cookie-parser")());
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(
  session({
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Middleware to extract client IP address
app.use(clientIp);

// Middleware to Routes
app.use("/", router);

module.exports = app;
