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
            res.send("ppoop");
            // res.send(await MessageModel.find({}, { _id:1}).sort({_id:-1}).limit(20));

        }
                
    // where we get all the messages from mongo + send all the messages to the backend (*very important*)

    // NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

});

// TODO not a todo but has to be read through Postman for now for some reason
exports.post = asyncHandler(async (req, res, next) => {

    console.log("messageControllerPostworks");

    // it looks like the code is not being read here
    saveMessage().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
        async function saveMessage() {

            // why is this not working?
            const mes = new MessageModel({
                text: req.body.text,
                // TODO: get current server and channel and replace "defaultserver/channel" with it here when
                // it comes time to work more on the messages
                server: req.body.server,
                // WHY IS IT NOT FREAKING WORKING GRRR
                channel: req.body.channel,
            });

            console.log(req.body.text+"<text");
            console.log(req.body.server+"<server");
            console.log(req.body.channel+"<chanasdfsadfel");
            // shouldn't it go through like the "sendMessage"
            // parts instead of only this part?
            console.log("<tex>");
            // why will mes.save() not save the object with server and channel data?
            mes.save(); // await mes.save();
            
            console.log("Messge: " + mes.text);

            // why is it only sending mes.text
            // vvv what is this vvv
            res.send(mes);
            // res.save?
            // mes.text doc
            // what is res.send(mes) even doing

        }

});