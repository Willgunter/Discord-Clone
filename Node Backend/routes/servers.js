const express = require("express");
const router = express.Router();

const server_controller = require("../controllers/serverController");

/// SERVER ROUTES ///

router.get('/', server_controller.index);

router.post('/:serverId', server_controller.post);

// eventually add a delete server request?

module.exports = router;