"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../controllers/users.controller");

var router = (0, _express.Router)();
// /api/users/
router.post('/', _users.createUser);
router.get('/', _users.getUser);
router.post('/login', _users.Login); // /api/users/:userID

router.get('/:id', _users.getUserById);
router["delete"]('/:id', _users.deleteUser);
router.put('/:id', _users.updateUser);
var _default = router;
exports["default"] = _default;