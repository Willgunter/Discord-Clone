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

// for server object
router.get('/server', server_controller.getserver);
router.post('/server', server_controller.postserver);
router.put('/server', server_controller.addmessage);

// for messages
router.get('/server', server_controller.getmessages);


// for server icons

// used to get a specific server icon (used in frontend to specify which icon to use)
router.get('/server-icon/:filename', server_controller.getservericon);

router.post('/server-icon/:filename', upload.single("file"), server_controller.postservericon);

// TODO eventually add a delete server request????

module.exports = router;