// place where we submit and store the messages
const { MessageModel } = require("../models/message");
// NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/messages
exports.index = asyncHandler(async (req, res, next) => {
    
    saveMessage().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
        async function saveMessage() {
            // TODO why is this not working
            // TODO req.body.text does not work. It keeps being displayed as undefined
            const mes = new MessageModel({ text: req.body.text, });
            // console.log(123);
            // why is req.body.text always undefined...
            if ( mes.text != undefined ) {
            //     // wasn't there something inside the .save()???
            //     // I feel like thats irrelevant though...
                await mes.save();
            }
            res.send(mes);
        }
                
    // where we get all the messages from mongo + send all the messages to the backend (*very important*)

    // NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

});

// TODO WHY IS THIS NOT BEING READ
exports.post = asyncHandler(async (req, res, next) => {

    saveMessage().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
        async function saveMessage() {
            // TODO why is this not working
            // TODO req.body.text does not work. It keeps being displayed as undefined
            // const mes = new MessageModel({ text: req.body.text, });
            console.log(123);
        }

});