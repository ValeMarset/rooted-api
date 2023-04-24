const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.index);
router.post("/", productController.store);
router.patch("/:id", productController.update);
router.delete("/", productController.destroy);
router.get("/:id", productController.show);

module.exports = router;
