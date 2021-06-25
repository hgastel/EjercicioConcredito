"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _databse = require("../database/databse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Producto = _databse.sequelize.define('productos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  precio: {
    type: _sequelize["default"].DECIMAL
  },
  cantidad: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = Producto;
exports["default"] = _default;