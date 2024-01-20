const express = require("express");
const router = express.Router();

const channel_controller = require("../controllers/channelController");

/// SERVER ROUTES ///

router.get('/channel-info', channel_controller.channelinfo);

router.post('/create-channel', channel_controller.createchannel);
// /:serverId ???
// eventually add a delete server request?

module.exports = router;