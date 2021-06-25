"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _databse = require("../database/databse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Prospecto = _databse.sequelize.define('prospectos', {
  folio: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].CHAR
  },
  primerapellido: {
    type: _sequelize["default"].CHAR
  },
  segundoapellido: {
    type: _sequelize["default"].CHAR
  },
  calle: {
    type: _sequelize["default"].CHAR
  },
  numero: {
    type: _sequelize["default"].CHAR
  },
  colonia: {
    type: _sequelize["default"].CHAR
  },
  codigopostal: {
    type: _sequelize["default"].INTEGER
  },
  telefono: {
    type: _sequelize["default"].CHAR
  },
  rfc: {
    type: _sequelize["default"].CHAR
  },
  estatus: {
    type: _sequelize["default"].CHAR
  }
}, {
  timestamps: false
});

var _default = Prospecto;
exports["default"] = _default;