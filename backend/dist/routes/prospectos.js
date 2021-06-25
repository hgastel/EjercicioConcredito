"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _prospectosController = require("../controllers/prospectosController");

var router = (0, _express.Router)();

var path = require('path');

var multer = require('multer');

router.post('/', _prospectosController.createProspecto);
router.get('/', _prospectosController.getProspecto);
router.get('/:folio', _prospectosController.getProspectoByFolio);
router.put('/:folio', _prospectosController.updateProspecto);
router.post('/observacion/', _prospectosController.createObservacion);
router.get('/observacion/:folio', _prospectosController.getObservacionByFolio);
var _default = router;
exports["default"] = _default;