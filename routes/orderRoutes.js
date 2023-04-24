const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", orderController.index);
router.get("/:id", orderController.show);

router.use(checkJwt({ secret: process.env.SESSION_SECRET, algorithms: ["HS256"] }));
router.post("/", orderController.store);
router.patch("/", orderController.update);

module.exports = router;
