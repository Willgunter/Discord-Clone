const express = require("express");
const router = express.Router();

const userauth_controller = require("../controllers/userauthController");

/// USERAUTH ROUTES ///

router.get('/', userauth_controller.index);

module.exports = router;