const express = require("express");
const router = express.Router();
const userOrderController = require("../controllers/userOrderController");
const { expressjwt: checkJwt } = require("express-jwt");

router.use(checkJwt({ secret: process.env.SESSION_SECRET, algorithms: ["HS256"] }));
router.get("/", userOrderController.index);

module.exports = router;
