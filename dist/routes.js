"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// Importações
var _express = require('express');
var _ProductController = require('./controllers/ProductController'); var _ProductController2 = _interopRequireDefault(_ProductController);

const routes = _express.Router.call(void 0, );

// Endpoints
routes.get('/products', _ProductController2.default.index);
routes.post('/products', _ProductController2.default.store);
routes.put('/products', _ProductController2.default.put);

exports. default = routes;
