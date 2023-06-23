require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const router = require("../routers/index.router");
const session = require("express-session");
const generateRandomSecret = require("../services/RandomSecret.service");
const sessionSecret = generateRandomSecret();
const passport = require("./passport");

const MongoStore = require("connect-mongo")(session);

const store = new MongoStore({
  url: process.env.MONGODB_URI, // Replace with your MongoDB connection string
  collection: "LoginSessions", // Specify the name of the collection to store sessions
});

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
    store: store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Middleware to Routes
app.use("/", router);

module.exports = app;
