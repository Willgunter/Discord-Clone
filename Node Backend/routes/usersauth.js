const express = require("express");
const router = express.Router();

const userauth_controller = require("../controllers/userauthController");

/// MESSAGE ROUTES ///

// GET home page (log-in page?)
router.get('/', userauth_controller.index);

router.post('/', userauth_controller.post);

// LETS NOT WORK ON ROUTING UNTIL WE AT LEAST FIGURE OUT HOW TO ADD A MESSAGE
// ALSO, WE HAVE TO DO THE ROUTING IN ANGULAR DUMBASS

// GET request for general chat for server 1
// TODO think of names for the three servers
// router.get("/:<server1>/:general");

// POST request for general chat for server 1
// router.post("/:<server1>/:general");

module.exports = router;