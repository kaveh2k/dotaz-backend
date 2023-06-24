// session
const generateRandomSecret = require("./src/services/RandomSecret.service");
const session = require("express-session");
const sessionSecret = generateRandomSecret();
const app = require("./src/config/app");

const PORT = process.env.PORT || 5000;

const { db } = require("./src/config/database");
const passport = require("./src/config/passport");

//collection to store sessions
const MongoDBStore = require("connect-mongodb-session")(session);

const store = new MongoDBStore({
  uri: process.env.MONGODV_URI,
  collection: "sessions",
});
store.on("error", (error) => {
  console.error("MongoDB session store error:", error);
});
app.use(
  session({
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
    store: store,
  })
);

// Database connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("connected", () => {
  console.log("Connected to Database");
});

app.use(passport.initialize());
app.use(passport.session());

// Server connection
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} and witing for database ....`);
});
