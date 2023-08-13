// place where we submit and store the messages
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const { MessageModel } = require('../models/message');

// => localhost:3000/test
router.get('/', (req, res) => {
    res.send('it probably fucking works');
    
});

router.post('/', (req, res) => {

    
saveMessage().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
async function saveMessage(doc) {
    const mes = new MessageModel({ text: req.body.text });
    await mes.save();
    res.send(doc);
}

    // mes.save((err, doc) => {
    //     if (!err) { res.send(doc); }
    //     else { console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)); }
    // });
});

module.exports = router;