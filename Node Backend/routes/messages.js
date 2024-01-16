const express = require("express");
const router = express.Router();

const message_controller = require("../controllers/messageController");

/// MESSAGE ROUTES ///

// GET home page (log-in page?) 
// something more appropriate

// router.get('/', message_controller.index); // render something might have something 
// to do with the anglar docs idk???
// why is this being called twice???
router.get('/', message_controller.index);

// why is posting not working?
router.post('/', message_controller.post);

// LETS NOT WORK ON ROUTING UNTIL WE AT LEAST FIGURE OUT HOW TO ADD A MESSAGE
// ALSO, WE HAVE TO DO THE ROUTING IN ANGULAR DUMBASS

// GET request for general chat for server 1
// router.get("/:<server1>/:general");

// POST request for general chat for server 1
// router.post("/:<server1>/:general");

module.exports = router;