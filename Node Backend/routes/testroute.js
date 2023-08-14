// place where we submit and store the messages
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { MessageModel } = require('../models/message');

// => localhost:3000/test
router.get('/', (req, res) => {

    // TODO: Note to self, rearrange this shit into
    // routes AND controller files just like in project
    // titled twilltch

        saveMessage().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
        async function saveMessage() {
            // TODO req.body.text does not work
            const mes = new MessageModel({ text: "req.body.text" });
            await mes.save();
            // why is it only displaying one at a time
            // check out video
            // vvv is needed? vvv
            res.send(
                // is this the part where we get all the documents from the database??
                await MessageModel.find({}, {text:1, _id:0})
            );
            
        }
        
});

module.exports = router;