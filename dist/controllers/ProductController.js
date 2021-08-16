"use strict";Object.defineProperty(exports, "__esModule", {value: true});/* eslint-disable @typescript-eslint/no-explicit-any */
// Importações

var _Product = require('../schemas/Product');
var _sendMail = require('../services/sendMail');

// Criando Controller
exports. default = {
  // Find
  async index(req, res) {
    const products = await _Product.Product.find();

    return res.json(products);
  },
  // Create
  async store(req, res) {
    const product = await _Product.Product.create(req.body);

    if (req.body.quantity == 0) {
      _sendMail.handleSendMail.call(void 0, );
    }

    return res.json(product);
  },
  // Update
  async put(req, res) {
    const product = await _Product.Product.findOne(req.body);
    const newProduct = await _Product.Product.updateOne({ _id: product._id }, { quantity: product.quantity - 1 });
    const productUpdated = await _Product.Product.findOne(req.body);

    if (productUpdated.quantity < 1) {
      _sendMail.handleSendMail.call(void 0, );
    }
    return res.json(newProduct);
  },
};
