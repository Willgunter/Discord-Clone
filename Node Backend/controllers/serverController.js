// place where we submit and store the messages

var { ServerModel } = require("../models/server");
var { ChannelModel } = require("../models/channel");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

// => localhost:3000/servers
exports.index = asyncHandler(async (req, res, next) => {
    
    saveServer().catch((err) => console.log('Error in Message {test} Save :' + JSON.stringify(err, undefined, 2)));
        async function saveServer() {
            
            res.send(await ServerModel.find({}, { name:1, _id:0}).sort({_id:-1}));
            
        }
                
    // where we get all the messages from mongo + send all the messages to the backend (*very important*)

    // NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

});

exports.post = asyncHandler(async (req, res, next) => {

    let newServer = new ServerModel({
        name: req.body.name,
        // channels: req.body.channels,
        // add channels here once I come back
    }) 

    console.log(newServer.name);

    try {
        server = ServerModel.addServer(newServer);
    } catch (err) {
        return res.json({success: false, msg: 'Failed to add server'});
    }
    
    return res.json({success: true, msg: 'Server added'});

});