// place where we submit and store the messages
const { MessageModel } = require("../models/message");

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/messages ()
exports.index = asyncHandler(async (req, res, next) => {
    
    res.send(await MessageModel.find({}, {text:1, _id:0}));

});

// exports.index = asyncHandler(async (req, res, next) => {
    


//     // TODO FIX SOMEHOW
    // res.send(await Message.find({}, {text:1, _id:0}));

// });

// router.post('/', (req, res) => {

//     saveMessage().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
//         async function saveMessage() {
//             // TODO req.body.text does not work. It keeps being displayed as undefined
//             var mes = new MessageModel({ text: req.body.text, });

//             // why is req.body.text always undefined...
//             if (mes.text != undefined) {
//                 await mes.save();
//             }
            
//             // where we get all the messages from mongo + send all the messages to the backend (*very important*)
//             res.send(mes);
//         }
// });