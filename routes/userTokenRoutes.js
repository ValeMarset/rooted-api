const express = require("express");
const router = express.Router();
const userTokenController = require("../controllers/userTokenController");

router.post("/", userTokenController.store);

module.exports = router;
