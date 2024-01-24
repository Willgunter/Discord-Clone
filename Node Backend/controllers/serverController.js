// place where we submit and store the messages

var { ServerModel } = require("../models/server");
var { ChannelModel } = require("../models/channel");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");
// const multer = require("multer");
const path = require("path");
const fs = require("fs");

// => localhost:3000/servers
exports.getserver = asyncHandler(async (req, res, next) => {
    // TODO clean up all error messages
    // CURRENT PROBLEM (I THINK)
    getServer().catch((err) => console.log('Error in get Server Save :' + JSON.stringify(err, undefined, 2)));
        async function getServer() {
            const servers = await ServerModel.find({}, { name: 1, _id: 0 }).sort({ name: 1 });
            const serverNames = servers.map(server => server.name);
            res.send(serverNames);
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

// Used by frontend to get server image from server 
exports.getservericon = asyncHandler(async (req, res, next) => {
    
    getOneServerIcon().catch((err) => console.log('Error in get Server Icon Save :' + JSON.stringify(err, undefined, 2)));
    async function getOneServerIcon() {

        // Path of where images are
        const imageFolderPath = "../Files/serverImages"; // res.params.filename;

        // Read all files in the folder and sends them to frontend
        fs.readdir(imageFolderPath, (err, files) => {
            if (err) {
                console.error("Error reading image folder:", err);
                res.status(404).send('Image not found');
                return;
            }

            // Find the index of file with name filename
            const fileName = req.params.filename;

            let fileIndex = 0;
            for (fileIndex; files.length; fileIndex++) {
                if (files[fileIndex] === fileName) {
                    break;
                }
            }

            // Reads actual file
            fs.readFile(path.join(imageFolderPath, files[fileIndex]), (err, data) => {
                if (err) {
                    console.error("Error reading image file:", err);
                    res.status(500).send('Internal server error');
                    return;
                }

                // Send the image data as the response
                res.status(200).send(data);
            });
        });

    }
});

// Saves file to server
exports.postservericon = asyncHandler(async (req, res, next) => {

    saveServerIcon().catch((err) => console.log('Error in post Server Icon Save :' + JSON.stringify(err, undefined, 2)));
        async function saveServerIcon() {

            // Saves file
            res.send(req.file);
    }
});
