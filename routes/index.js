const express = require("express");
const router = express.Router();

const productRouter = require("./product.routes");
const categoryRouter = require("./category.routes");

router.use("/product", productRouter);
router.use("/category", categoryRouter);

module.exports = router;
