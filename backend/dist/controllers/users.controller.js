"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = getUser;
exports.createUser = createUser;
exports.getUserById = getUserById;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.Login = Login;

var _Users = _interopRequireDefault(require("../models/Users"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//const saltRounds = 10;
function getUser(_x, _x2) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Users["default"].findAll();

          case 3:
            users = _context.sent;
            res.json({
              data: users
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
  return _getUser.apply(this, arguments);
}

function createUser(_x3, _x4) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, usrname, pass, nombre, sexo, edad, telefono, fechanac, newUser, id, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, usrname = _req$body.usrname, pass = _req$body.pass, nombre = _req$body.nombre, sexo = _req$body.sexo, edad = _req$body.edad, telefono = _req$body.telefono, fechanac = _req$body.fechanac;
            _context2.next = 3;
            return encriptarPass(pass);

          case 3:
            pass = _context2.sent;
            _context2.prev = 4;
            _context2.next = 7;
            return _Users["default"].create({
              usrname: usrname,
              pass: pass,
              nombre: nombre,
              sexo: sexo,
              edad: edad,
              telefono: telefono,
              fechanac: fechanac
            }, {
              fields: ['usrname', 'pass', 'nombre', 'sexo', 'edad', 'telefono', 'fechanac']
            });

          case 7:
            newUser = _context2.sent;

            if (!newUser) {
              _context2.next = 12;
              break;
            }

            id = newUser.id;
            token = _jsonwebtoken["default"].sign({
              id: id
            }, _config["default"].secret, {
              expiresIn: 60 * 5 * 24
            });
            return _context2.abrupt("return", res.json({
              message: 'Usuario creado exitosamente',
              data: newUser,
              auth: true,
              token: token
            }));

          case 12:
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](4);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Algo salio mal',
              data: {}
            });

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 14]]);
  }));
  return _createUser.apply(this, arguments);
}

function getUserById(_x5, _x6) {
  return _getUserById.apply(this, arguments);
}

function _getUserById() {
  _getUserById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Users["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            usuario = _context3.sent;
            res.json(usuario);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getUserById.apply(this, arguments);
}

function deleteUser(_x7, _x8) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Users["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Usuario eliminado exitosamente',
              count: deleteRowCount
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteUser.apply(this, arguments);
}

function updateUser(_x9, _x10) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, usrname, pass, nombre, sexo, edad, telefono, fechanac, usuarios;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, usrname = _req$body2.usrname, pass = _req$body2.pass, nombre = _req$body2.nombre, sexo = _req$body2.sexo, edad = _req$body2.edad, telefono = _req$body2.telefono, fechanac = _req$body2.fechanac; //se encripta contraseña del usuario. metodo sync
            //pass = bcrypt.hashSync(pass, saltRounds);
            //metodo async

            _context6.next = 4;
            return encriptarPass(pass);

          case 4:
            pass = _context6.sent;
            _context6.prev = 5;
            _context6.next = 8;
            return _Users["default"].findAll({
              attributes: ['id', 'usrname', 'pass', 'nombre', 'sexo', 'edad', 'telefono', 'fechanac'],
              where: {
                id: id
              }
            });

          case 8:
            usuarios = _context6.sent;

            if (usuarios.length > 0) {
              usuarios.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(usuario) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return usuario.update({
                            usrname: usrname,
                            pass: pass,
                            nombre: nombre,
                            sexo: sexo,
                            edad: edad,
                            telefono: telefono,
                            fechanac: fechanac
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x16) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Usuario actualizado exitosamente',
              data: usuarios
            }));

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](5);
            console.log(_context6.t0);

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[5, 13]]);
  }));
  return _updateUser.apply(this, arguments);
}

function Login(_x11, _x12) {
  return _Login.apply(this, arguments);
}

function _Login() {
  _Login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var _req$body3, usrname, pass, usuario, passValido, id, token;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body3 = req.body, usrname = _req$body3.usrname, pass = _req$body3.pass;
            /*
            const token = req.headers['x-access-token'];
              if (!token){
                return res.status(401).json({
                    auth: false,
                    message: 'No tiene token'
                })
            }
              const decoded = jwt.verify(token, config.secret);
            */

            /*
            const usuario = await Usuario.findOne({
                where: {
                    id : decoded.id
                }
            })
            */

            _context7.next = 3;
            return _Users["default"].findOne({
              where: {
                usrname: usrname
              }
            });

          case 3:
            usuario = _context7.sent;

            if (usuario) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt("return", res.status(404).send('No existe el usuario.'));

          case 6:
            _context7.next = 8;
            return validarPass(pass, usuario.pass);

          case 8:
            passValido = _context7.sent;

            if (passValido) {
              _context7.next = 11;
              break;
            }

            return _context7.abrupt("return", res.status(404).send('Pass incorrecto.'));

          case 11:
            id = usuario.id;
            token = _jsonwebtoken["default"].sign({
              id: id
            }, _config["default"].secret, {
              expiresIn: 60 * 60 * 24
            }); //res.json(usuario);

            return _context7.abrupt("return", res.json({
              message: 'Usuario logeado exitosamente',
              data: usuario,
              auth: true,
              token: token
            }));

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _Login.apply(this, arguments);
}

function encriptarPass(_x13) {
  return _encriptarPass.apply(this, arguments);
}

function _encriptarPass() {
  _encriptarPass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(password) {
    var salt;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _bcrypt["default"].genSalt(10);

          case 2:
            salt = _context8.sent;
            return _context8.abrupt("return", _bcrypt["default"].hash(password, salt));

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _encriptarPass.apply(this, arguments);
}

function validarPass(_x14, _x15) {
  return _validarPass.apply(this, arguments);
}

function _validarPass() {
  _validarPass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(pass, passbd) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", _bcrypt["default"].compare(pass, passbd));

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _validarPass.apply(this, arguments);
}