const mongoose = require("mongoose");
const User = require("../schema/user.schema");

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODV_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

module.exports = { db, User };
