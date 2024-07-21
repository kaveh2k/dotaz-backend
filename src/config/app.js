require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const router = require("../routers/index.router");

// const { db } = require("./database");
const passport = require("./passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const generateRandomSecret = require("../services/RandomSecret.service");

const corsOptions = require("./corsOptions");
// Set up Express app
const app = express();

app.use(cors(corsOptions));
// app.use(cors());

//app.use(
//session({
//  secret: generateRandomSecret(),
//  resave: true,
//   saveUninitialized: true,
// store: MongoStore.create({
//  mongoUrl: process.env.MONGODV_URL,
// }),
// })
//);

// Set up Express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("cookie-parser")());
app.use(express.json());
app.use(helmet());

// Database connection
//db.on("error", console.error.bind(console, "MongoDB connection error:"));
//db.on("connected", () => {
//  console.log("Connected to Database");
//});

app.use(passport.initialize());
app.use(passport.session());

// Middleware to Routes
app.use("/", router);

module.exports = app;
