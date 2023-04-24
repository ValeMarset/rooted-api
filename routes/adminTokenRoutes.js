const express = require("express");
const router = express.Router();
const adminTokenController = require("../controllers/adminTokenController");

router.post("/", adminTokenController.store);

module.exports = router;
