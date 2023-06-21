const express = require("express");
const { postMain } = require("../../controllers/main/postMain.controller");
const {
  mainRedirect,
} = require("../../controllers/main/getMainRedirect.controller");
const router = express.Router();

router.post("/*", postMain);
router.get("/*", mainRedirect);

module.exports = { mainRouter: router };
