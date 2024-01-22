const express = require("express");
const router = express.Router();

const channel_controller = require("../controllers/channelController");

/// SERVER ROUTES ///

router.get('/channel', channel_controller.getchannel);

router.post('/channel', channel_controller.postchannel);
// /:serverId ???
// eventually add a delete server request?

module.exports = router;