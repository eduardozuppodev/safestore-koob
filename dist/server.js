"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

// Ouvindo porta 3001
_app2.default.listen(process.env.PORT || 3001);
