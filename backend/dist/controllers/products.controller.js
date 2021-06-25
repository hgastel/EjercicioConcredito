"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = getProducts;
exports.createProduct = createProduct;
exports.getProductById = getProductById;
exports.deleteProduct = deleteProduct;
exports.updateProduct = updateProduct;

var _Products = _interopRequireDefault(require("../models/Products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProducts(_x, _x2) {
  return _getProducts.apply(this, arguments);
}

function _getProducts() {
  _getProducts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var productos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Products["default"].findAll();

          case 3:
            productos = _context.sent;
            res.json({
              data: productos
            });
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
  return _getProducts.apply(this, arguments);
}

function createProduct(_x3, _x4) {
  return _createProduct.apply(this, arguments);
}

function _createProduct() {
  _createProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombre, descripcion, precio, cantidad, newProduct;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, precio = _req$body.precio, cantidad = _req$body.cantidad;
            _context2.prev = 1;
            _context2.next = 4;
            return _Products["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              precio: precio,
              cantidad: cantidad
            }, {
              fields: ['nombre', 'descripcion', 'precio', 'cantidad']
            });

          case 4:
            newProduct = _context2.sent;

            if (!newProduct) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Producto creado exitosamente',
              data: newProduct
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Algo salio mal',
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createProduct.apply(this, arguments);
}

function getProductById(_x5, _x6) {
  return _getProductById.apply(this, arguments);
}

function _getProductById() {
  _getProductById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, products;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Products["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            products = _context3.sent;
            res.json(products);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getProductById.apply(this, arguments);
}

function deleteProduct(_x7, _x8) {
  return _deleteProduct.apply(this, arguments);
}

function _deleteProduct() {
  _deleteProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Products["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Producto eliminado exitosamente',
              count: deleteRowCount
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteProduct.apply(this, arguments);
}

function updateProduct(_x9, _x10) {
  return _updateProduct.apply(this, arguments);
}

function _updateProduct() {
  _updateProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, descripcion, precio, cantidad, productos;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, precio = _req$body2.precio, cantidad = _req$body2.cantidad;
            _context6.prev = 2;
            _context6.next = 5;
            return _Products["default"].findAll({
              attributes: ['id', 'nombre', 'descripcion', 'precio', 'cantidad'],
              where: {
                id: id
              }
            });

          case 5:
            productos = _context6.sent;

            if (productos.length > 0) {
              productos.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(producto) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return producto.update({
                            nombre: nombre,
                            descripcion: descripcion,
                            precio: precio,
                            cantidad: cantidad
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Producto actualizado exitosamente',
              data: productos
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _updateProduct.apply(this, arguments);
}