const express = require("express");
const router = express.Router();
const categoryProductController = require("../controllers/categoryProductController");

router.get("/:id", categoryProductController.show);

module.exports = router;
