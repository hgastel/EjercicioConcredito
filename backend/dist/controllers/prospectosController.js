"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProspecto = getProspecto;
exports.getProspectoByFolio = getProspectoByFolio;
exports.createProspecto = createProspecto;
exports.createObservacion = createObservacion;
exports.getObservacionByFolio = getObservacionByFolio;
exports.updateProspecto = updateProspecto;

var _ProspectosModel = _interopRequireDefault(require("../models/ProspectosModel"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _databse = require("../database/databse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProspecto(_x, _x2) {
  return _getProspecto.apply(this, arguments);
}

function _getProspecto() {
  _getProspecto = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var prospectos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _databse.sequelize.query("select folio as \"Folio\", nombre as \"Nombre\",primerapellido as \"Primer Apellido\", segundoapellido as \"Segundo Apellido\", estatus as \"Estatus\" from prospectos ORDER BY 1 ASC", {
              type: _sequelize["default"].SELECT,
              plain: false
            });

          case 3:
            prospectos = _context.sent;
            res.json(prospectos[0]); //console.log(prospectos[0]);

            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getProspecto.apply(this, arguments);
}

function getProspectoByFolio(_x3, _x4) {
  return _getProspectoByFolio.apply(this, arguments);
}

function _getProspectoByFolio() {
  _getProspectoByFolio = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var folio, prospectos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            folio = req.params.folio;
            _context2.prev = 1;
            _context2.next = 4;
            return _databse.sequelize.query("select folio as \"Folio\", nombre as \"Nombre\",primerapellido as \"Primer Apellido\", segundoapellido as \"Segundo Apellido\", calle as \"Calle\", numero as \"Numero\", colonia as \"Colonia\", codigopostal as \"Codigo Postal\", telefono as \"Telefono\", rfc as \"RFC\", estatus as \"Estatus\" from prospectos where folio = :folio", {
              type: _sequelize["default"].SELECT,
              plain: false,
              replacements: {
                folio: folio
              }
            });

          case 4:
            prospectos = _context2.sent;
            res.json(prospectos[0]); //console.log(prospectos[0]);

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getProspectoByFolio.apply(this, arguments);
}

function createProspecto(_x5, _x6) {
  return _createProspecto.apply(this, arguments);
}

function _createProspecto() {
  _createProspecto = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, primerapellido, segundoapellido, calle, numero, colonia, codigopostal, telefono, rfc, estatus, newProspecto;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, primerapellido = _req$body.primerapellido, segundoapellido = _req$body.segundoapellido, calle = _req$body.calle, numero = _req$body.numero, colonia = _req$body.colonia, codigopostal = _req$body.codigopostal, telefono = _req$body.telefono, rfc = _req$body.rfc, estatus = _req$body.estatus;
            console.log(req.body);
            _context3.prev = 2;
            _context3.next = 5;
            return _ProspectosModel["default"].create({
              nombre: nombre,
              primerapellido: primerapellido,
              segundoapellido: segundoapellido,
              calle: calle,
              numero: numero,
              colonia: colonia,
              codigopostal: codigopostal,
              telefono: telefono,
              rfc: rfc,
              estatus: estatus
            }, {
              fields: ['nombre', 'primerapellido', 'segundoapellido', 'calle', 'numero', 'colonia', 'codigopostal', 'telefono', 'rfc', 'estatus']
            });

          case 5:
            newProspecto = _context3.sent;

            if (!newProspecto) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: '1',
              data: newProspecto
            }));

          case 8:
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            res.status(500).json({
              message: '0',
              data: {}
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));
  return _createProspecto.apply(this, arguments);
}

function createObservacion(_x7, _x8) {
  return _createObservacion.apply(this, arguments);
}

function _createObservacion() {
  _createObservacion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, folio, observacion, prospectos;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, folio = _req$body2.folio, observacion = _req$body2.observacion;
            console.log(req.body);
            _context4.prev = 2;
            _context4.next = 5;
            return _databse.sequelize.query("INSERT INTO rechazados (folio,observacion) values (:folio,:observacion);", {
              type: _sequelize["default"].INSERT,
              plain: false,
              replacements: {
                folio: folio,
                observacion: observacion
              }
            });

          case 5:
            prospectos = _context4.sent;
            return _context4.abrupt("return", res.json({
              message: 'Observacion creada con exito!'
            }));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return _createObservacion.apply(this, arguments);
}

function getObservacionByFolio(_x9, _x10) {
  return _getObservacionByFolio.apply(this, arguments);
}

function _getObservacionByFolio() {
  _getObservacionByFolio = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var folio, prospectos;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            folio = req.params.folio;
            _context5.prev = 1;
            _context5.next = 4;
            return _databse.sequelize.query("select observacion from rechazados where folio = :folio LIMIT 1;", {
              type: _sequelize["default"].SELECT,
              plain: false,
              replacements: {
                folio: folio
              }
            });

          case 4:
            prospectos = _context5.sent;
            res.json(prospectos[0]); //console.log(prospectos[0]);

            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _getObservacionByFolio.apply(this, arguments);
}

function updateProspecto(_x11, _x12) {
  return _updateProspecto.apply(this, arguments);
}

function _updateProspecto() {
  _updateProspecto = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var folio, estatus, prospectos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            folio = req.params.folio;
            estatus = req.body.estatus;
            _context7.prev = 2;
            _context7.next = 5;
            return _ProspectosModel["default"].findAll({
              attributes: ['folio', 'estatus'],
              where: {
                folio: folio
              }
            });

          case 5:
            prospectos = _context7.sent;

            if (prospectos.length > 0) {
              prospectos.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(prospecto) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return prospecto.update({
                            estatus: estatus
                          });

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context7.abrupt("return", res.json({
              message: 'Prospecto actualizado exitosamente',
              data: prospectos
            }));

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 10]]);
  }));
  return _updateProspecto.apply(this, arguments);
}