const express = require("express");
const router = express.Router();
const passport = require("../../config/passport");
const { getReturn } = require("../../controllers/steamLogin/getReturn");

router.use(
  "/",
  passport.authenticate("steam", {
    failureRedirect: process.env.FAILURE_REDIRECT_URL,
  })
);

router.use(
  "/return",
  passport.authenticate("steam", {
    successRedirect: process.env.RETURN_URL,
    failureRedirect: process.env.FAILURE_REDIRECT_URL,
  }),
  getReturn
);

module.exports = { steamRouter: router };
