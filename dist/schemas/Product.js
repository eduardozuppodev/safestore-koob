"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');


// Criando interface


// Criação do Schema
const ProductSchema = new (0, _mongoose.Schema)(
  {
    name: String,
    brand: String,
    category: String,
    price: String,
    quantity: Number,
  },
  {
    timestamps: true,
  },
);

 const Product = _mongoose.model('Product', ProductSchema); exports.Product = Product;
