// place where we submit and store the messages
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { MessageSchema } = require('../models/message');

// => localhost:3000/test
router.get('/', (req, res) => {
    res.send('it probably fucking works');
    
});

router.post('/', (req, res) => {
    var mes = new MessageSchema({
        text: req.body.text,
    });
    mes.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;