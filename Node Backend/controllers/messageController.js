// place where we submit and store the messages

var { MessageModel } = require("../models/message");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/messages
exports.index = asyncHandler(async (req, res, next) => {
    
    saveMessage().catch((err) => console.log('Error in Message {test} Save :' + JSON.stringify(err, undefined, 2)));
        async function saveMessage() {
            // TODO why is this not working
            // TODO req.body.text does not work. It keeps being displayed as undefined
            res.send(await MessageModel.find({}, {text:1, server:1, _id:0}).sort({_id:-1}).limit(20));

        }
                
    // where we get all the messages from mongo + send all the messages to the backend (*very important*)

    // NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

});

// TODO not a todo but has to be read through Postman for now for some reason
exports.post = asyncHandler(async (req, res, next) => {

    // it looks like the code is not being read here
    saveMessage().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
        async function saveMessage() {

            const mes = new MessageModel({ 
                text: req.body.text,
                // TODO: get current server and channel and replace "defaultserver/channel" with it here when
                // it comes time to work more on the messages
                server: "defaultserver",
                // WHY IS IT NOT FREAKING WORKING GRRR
                channel: req.body.channel,
            });

            console.log(req.body.channel+"we");
            // shouldn't it go through like the "sendMessage"
            // parts instead of only this part?
            console.log("postwe");
            // why will mes.save() not save the object with server and channel data?
            await mes.save(); // await mes.save();

            console.log("Message: " + mes.text);

            // why is it only sending mes.text
            // vvv what is this vvv
            res.send(mes.text);
            // mes.text doc
            // what is res.send(mes) even doing

        }

});