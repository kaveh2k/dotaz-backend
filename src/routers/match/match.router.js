const express = require("express");
const { getMatchInfo } = require("../../controllers/match/match.controller");
const router = express.Router();

router.post("/:id", getMatchInfo);

module.exports = { matchRouter: router };
