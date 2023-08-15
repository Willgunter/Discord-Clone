const express = require("express");
const router = express.Router();

const message_controller = require("../controllers/messageController");

/// MESSAGE ROUTES ///

// GET home page (log-in page?) 
// TODO rename message controller to 
// something more appropriate
router.get("/", message_controller.index);

// GET request for general chat for server 1
// TODO think of names for the three servers
router.get("/:<server1>/:general");

// POST request for general chat for server 1
router.post("/:<server1>/:general");

// 

module.exports = router;