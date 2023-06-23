const express = require("express");
const router = express.Router();

const { matchRouter } = require("./match/match.router.js");
const { mainRouter } = require("./main/main.router.js");
const { healtzRouter } = require("./healtz/healtz.router.js");
const { authRouter } = require("./steam/auth.router.js");

router.use("/match", matchRouter);
router.use("/healtz", healtzRouter);
router.use("/auth", authRouter);
router.use("/*", mainRouter);

module.exports = router;
