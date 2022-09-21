const express = require("express")
const CategoryController = require("../controllers/category.controller")
const router = express.Router();

router.get("/api/category", CategoryController.getAllCategory);

router.get("/api/category/:id", CategoryController.getOneById);

router.post("/api/category", CategoryController.createCategory);

router.delete("/api/category/:id", CategoryController.removeCategory);

router.patch("/api/category/:id", CategoryController.updateCategory)

module.exports = router;