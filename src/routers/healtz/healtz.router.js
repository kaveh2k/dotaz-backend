const express = require("express");
const { getHealtz } = require("../../controllers/healtz/getHealtz.controller");
const {
  postHealtz,
} = require("../../controllers/healtz/postHealtz.controller");

const router = express.Router();

router.post("/", postHealtz);
router.get("/", getHealtz);

module.exports = { healtzRouter: router };
