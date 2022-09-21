const express = require("express")
const ProductRoute = require("../controllers/product.controller")
const router = express.Router();


router.post("/api/product", ProductRoute.createProduct);

router.get("/api/product", ProductRoute.getAll);

router.get("/api/product/:id", ProductRoute.getById);

router.patch("/api/product/:id", ProductRoute.updateProduct);

router.delete("/api/product/:id", ProductRoute.deleteProduct);

module.exports = router;