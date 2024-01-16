// place where we submit and store the messages

var { MessageModel } = require("../models/message");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/messages
exports.index = asyncHandler(async (req, res, next) => {
    
    saveMessage().catch((err) => console.log('Error in Message {test} Save :' + JSON.stringify(err, undefined, 2)));
        async function saveMessage() {
            
            // why can't it display channel?
            // why is it not updating at all?
            res.send(await MessageModel.find({}, { text:1, server:1, channel:1, _id:0}).sort({_id:-1}));
            
        }
                
    // where we get all the messages from mongo + send all the messages to the backend (*very important*)

    // NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

});

exports.post = asyncHandler(async (req, res, next) => {

    // it looks like the code is not being read here
    saveMessage().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
        async function saveMessage() {

            // why is this not working?
            const mes = new MessageModel({
                text: req.body.text,
                server: req.body.server,
                channel: req.body.channel,
            });

            await mes.save();
            
            // vvv what does this even do lmao vvv
            res.send(mes);

        }

});