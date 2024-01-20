// place where we submit and store the messages

var { ServerModel } = require("../models/server");
var { ChannelModel } = require("../models/channel");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/servers
exports.serverinfo = asyncHandler(async (req, res, next) => {
    
    getServer().catch((err) => console.log('Error in Message {test} Save :' + JSON.stringify(err, undefined, 2)));
        async function getServer() {
            
            res.send(await ServerModel.find({}, { name:1, _id:0}).sort({_id:-1}));
            
        }

    // where we get all the messages from mongo + send all the messages to the backend (*very important*)

    // NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

});

exports.createserver = asyncHandler(async (req, res, next) => {
    
    saveServer().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
    async function saveServer() {

        // why is this not working?
        const sev = new ServerModel({
            name: req.body.name,
            channels: req.body.channels,
            imagePath: req.body.imagePath,
        });

        await sev.save();
        
        // vvv what does this even do lmao vvv
        res.send(sev);

    }

});