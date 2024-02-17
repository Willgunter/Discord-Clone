const express = require("express");
const router = express.Router();

const message_controller = require("../controllers/messageController");

/// MESSAGE ROUTES ///

router.get('/', message_controller.index);

router.post('/', message_controller.post);


module.exports = router;