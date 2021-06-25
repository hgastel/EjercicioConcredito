const { Router } = require('express'); 

const router = new Router();

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename:  (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const uploadImage = multer({
    storage,
    //limits: {fileSize: 1000000}
}).array("photos");

router.post('/images/upload', (req, res) => {
    uploadImage(req, res, (err) => {
        if (err) {
            err.message = 'The file is so heavy for my service';
            return res.send(err);
        }
        res.send('uploaded');
    });
});


//Al subir las imagenes terminan en la ruta: ../public/uploads


module.exports = router;