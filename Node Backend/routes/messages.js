const express = require("express");
const router = express.Router();

const message_controller = require("../controllers/messageController");

/// MESSAGE ROUTES ///

// GET home page (log-in page?) 
// TODO rename message controller to 
// something more appropriate

// router.get('/', message_controller.index); // render something might have something 
// to do with the anglar docs idk???
// why is this being called twice???
router.get('/', message_controller.index)
    // saveMessage().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
    // async function saveMessage() {
        
    //     // TODO req.body.text does not work
    //     const mes = new MessageModel({ text: "req.body.text" });
    //     console.log(".get works");
    //     await mes.save();
    //     // why is it only displaying one at a time
    //     // check out video
    //     // vvv is needed? vvv
    //     res.send(
    //         // is this the part where we get all the documents from the database??
    //         await MessageModel.find({}, {text:1, _id:0})
    //     );
        
    // }

// why is posting not working?
router.post("/", message_controller.post);

// LETS NOT WORK ON ROUTING UNTIL WE AT LEAST FIGURE OUT HOW TO ADD A MESSAGE
// ALSO, WE HAVE TO DO THE ROUTING IN ANGULAR DUMBASS

// GET request for general chat for server 1
// TODO think of names for the three servers
// router.get("/:<server1>/:general");

// POST request for general chat for server 1
// router.post("/:<server1>/:general");

module.exports = router;