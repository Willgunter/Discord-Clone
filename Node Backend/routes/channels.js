const express = require("express");
const router = express.Router();

const channel_controller = require("../controllers/channelController");

/// SERVER ROUTES ///

router.get('/', channel_controller.getchannel);

router.post('/channel', channel_controller.postchannel);

module.exports = router;