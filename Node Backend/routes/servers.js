const express = require("express");
const router = express.Router();

const server_controller = require("../controllers/serverController");

/// SERVER ROUTES ///

router.get('/server-info', server_controller.serverinfo);

router.post('/create-server', server_controller.createserver);
// /:serverId ???
// eventually add a delete server request?

module.exports = router;