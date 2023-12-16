const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/userController");

/// MESSAGE ROUTES ///

// GET home page (log-in page?)
router.get('/', user_controller.index);

router.post('/', user_controller.post);

// LETS NOT WORK ON ROUTING UNTIL WE AT LEAST FIGURE OUT HOW TO ADD A MESSAGE
// ALSO, WE HAVE TO DO THE ROUTING IN ANGULAR DUMBASS

// GET request for general chat for server 1
// TODO think of names for the three servers
// router.get("/:<server1>/:general");

// POST request for general chat for server 1
// router.post("/:<server1>/:general");

module.exports = router;