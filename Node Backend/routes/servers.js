const express = require("express");
const router = express.Router();
const multer = require('multer');

const server_controller = require("../controllers/serverController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/'); // Specify the folder where you want to store the images
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });


/// SERVER ROUTES ///

router.get('/server-info', server_controller.serverinfo);
router.post('/create-server', server_controller.createserver);

router.get('/create-server-icon', server_controller.getservericon);
router.post('/create-server-icon', upload.single('image'), server_controller.postservericon);

// /:serverId ???
// eventually add a delete server request?

module.exports = router;