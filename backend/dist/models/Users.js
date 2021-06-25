"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _databse = require("../database/databse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Usuario = _databse.sequelize.define('usuarios', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  usrname: {
    type: _sequelize["default"].TEXT
  },
  pass: {
    type: _sequelize["default"].TEXT
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  sexo: {
    type: _sequelize["default"].CHAR
  },
  edad: {
    type: _sequelize["default"].INTEGER
  },
  telefono: {
    type: _sequelize["default"].BIGINT
  },
  fechanac: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

var _default = Usuario;
exports["default"] = _default;