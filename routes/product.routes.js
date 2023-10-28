const express = require("express");
const router = express.Router();
const { product } = require("../models");
const ProductService = require("../services/products");

const productService = new ProductService(product);

router.get("/", async (req, res) => {
  const products = await productService.get();
  console.log(products);
  res.send(products);
});

router.post("/add", async (req, res) => {
  const { name, code, description, unitPrice, category_id } = req.body;
  await productService.create({ name, code, description, unitPrice, category_id });
});

module.exports = router;
