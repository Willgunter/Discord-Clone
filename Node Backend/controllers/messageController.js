// place where we submit and store the messages

var { MessageModel } = require("../models/message");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/messages
exports.index = asyncHandler(async (req, res, next) => {
    
    saveMessage().catch((err) => console.log('Error in get Message Save :' + JSON.stringify(err, undefined, 2)));
        async function saveMessage() {
            
            res.send(await MessageModel.find({}, { text:1, server:1, channel:1, _id:0}).sort({_id:-1}));
            
        }
});

exports.post = asyncHandler(async (req, res, next) => {

    saveMessage().catch((err) => console.log('Error in post Message Save :' + JSON.stringify(err, undefined, 2)));
        async function saveMessage() {

            const mes = new MessageModel({
                text: req.body.text,
                user: req.body.user,
            });

            await mes.save();
            
            res.send(mes);

        }

});