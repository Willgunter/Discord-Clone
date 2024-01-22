const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

const server_controller = require("../controllers/serverController");

// Configuring multer to store images in a certain place and give the file a certain name
const storage = multer.diskStorage({

    // Specifies target destination
    destination: function (req, file, cb) {
      cb(null, '../Files/serverImages');
    },
    
    // Specifies file name
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

/// SERVER ROUTES ///

// for server object
router.get('/server', server_controller.getserver);
router.post('/server', server_controller.postserver);

// for server icon
router.get('/server-icon', server_controller.getservericon);
router.post('/server-icon', upload.single("file"), server_controller.postservericon);

// TODO comment out post request here and put it all in app.js just until we get it working. 
// for frontend, test out different ways we can grab the image
// also just look through angular page??

// /:serverId ???
// eventually add a delete server request?

module.exports = router;