"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = new Router();

var path = require('path');

var multer = require('multer');

var storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var uploadImage = multer({
  storage: storage //limits: {fileSize: 1000000}

}).array("photos");
router.post('/images/upload', function (req, res) {
  uploadImage(req, res, function (err) {
    if (err) {
      err.message = 'The file is so heavy for my service';
      return res.send(err);
    }

    res.send('uploaded');
  });
}); //Al subir las imagenes terminan en la ruta: ../public/uploads

module.exports = router;