"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// Importações
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

// Iniciando app
const app = _express2.default.call(void 0, );

// Configurando JSON
app.use(_express2.default.json());

// Configurando CORS
app.use(_cors2.default.call(void 0, ));

// Conectando ao Atlas
try {
  _mongoose2.default.connect(
    'mongodb+srv://ezuppo:dudu17022002@cluster0.5pw6a.mongodb.net/safestore?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  );
  console.log('Conectado com Sucesso!');
} catch (error) {
  console.log('Erro ao se conectar:', error);
}

// Chamando as rotas
app.use(_routes2.default);

exports. default = app;
