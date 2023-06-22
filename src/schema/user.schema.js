const mongoose = require("mongoose");

// Create a User schema
const userSchema = new mongoose.Schema({
  steamId: { type: String, required: true },
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
  profileUrl: { type: String },
  realName: { type: String },
  countryCode: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
