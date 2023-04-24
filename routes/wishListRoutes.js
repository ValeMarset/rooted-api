const express = require("express");
const router = express.Router();
const wishListItemController = require("../controllers/wishListItemController");
const { expressjwt: checkJwt } = require("express-jwt");

router.use(checkJwt({ secret: process.env.SESSION_SECRET, algorithms: ["HS256"] }));
router.get("/", wishListItemController.index);
router.patch("/", wishListItemController.update);
// router.get("/:id", wishListController.show);

module.exports = router;
