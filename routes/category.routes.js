const express = require("express");
const router = express.Router();
const CategoryService = require("../services/categories");
const { category } = require("../models");

const categoryService = new CategoryService(category);

router.get("/", async (req, res) => {
  try {
    let categories = categoryService.get();
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/", async (req, res) => {
  try {
    let categoryName = req.body.name;
    await categoryService.create(req.body);
    res.status(201).json({ categoryName });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
