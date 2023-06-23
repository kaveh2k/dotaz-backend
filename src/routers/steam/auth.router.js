const express = require("express");
const { steamRouter } = require("../auth/steam.router");
const router = express.Router();

router.use("/steam", steamRouter);

module.exports = { authRouter: router };
