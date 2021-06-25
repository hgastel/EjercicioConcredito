"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

var router = (0, _express.Router)();
// /api/products/
router.post('/', _products.createProduct);
router.get('/', _products.getProducts); // /api/products/:ProductID

router.get('/:id', _products.getProductById);
router["delete"]('/:id', _products.deleteProduct);
router.put('/:id', _products.updateProduct);
var _default = router;
exports["default"] = _default;