// place where we submit and store the messages

var { ServerModel } = require("../models/server");
var { ChannelModel } = require("../models/channel");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");
// const multer = require("multer");
const path = require("path");

// => localhost:3000/servers
exports.getserver = asyncHandler(async (req, res, next) => {
    // TODO clean up all error messages
    getServer().catch((err) => console.log('Error in get Server Save :' + JSON.stringify(err, undefined, 2)));
        async function getServer() {
            
            res.send(await ServerModel.find({}, { name:1, _id:0}).sort({_id:-1}));
            
        }

    // where we get all the messages from mongo + send all the messages to the backend (*very important*)

    // NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

});



exports.postserver = asyncHandler(async (req, res, next) => {
    
    saveServer().catch((err) => console.log('Error in post Server Save :' + JSON.stringify(err, undefined, 2)));
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

exports.getservericon = asyncHandler(async (req, res, next) => {
        
        // would it be better to fetch them all at once?
        getServerIcon().catch((err) => console.log('Error in get Server Icon Save :' + JSON.stringify(err, undefined, 2)));
            async function getServerIcon() {
                
                res.send("test");
                
            }
});

exports.postservericon = asyncHandler(async (req, res, next) => {

    saveServerIcon().catch((err) => console.log('Error in post Server Icon Save :' + JSON.stringify(err, undefined, 2)));
        async function saveServerIcon() {

            res.send(req.file);
    }
});
