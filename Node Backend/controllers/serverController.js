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
            console.log("names: " + serverNames);
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

// Sends a LIST of all the names of the server icons.
// We send a list here so we can loop through the list and tack the name of the server icon
// onto the end of the path to get the actual image
// ACTUALLY instead of doing this, lets try sending a list of the images
// along with the names of the image
// TODO get rid of this route if we can get it to work without it
exports.getallservericon = asyncHandler(async (req, res, next) => {
        
    // would it be better to fetch them all at once?
    getServerIcon().catch((err) => console.log('Error in get Server Icon Save :' + JSON.stringify(err, undefined, 2)));
        async function getServerIcon() {
                
            const imageFolderPath = "../Files/serverImages";

            // Necessary for some reason???
            fs.readdir(imageFolderPath, (err, files) => {

                if (err) {
                    console.error("Error reading image folder:", err);
                    return;
                }

                // Orders images files alphabetically to make it easy to match with servers
                // const imageFiles = files
                //     .filter((file) => file.endsWith(".jpg") || file.endsWith(".png")) // Filter only image files
                //     .sort((a, b) => a.localeCompare(b)); // Sort files by name

                // console.log("Image files:", imageFiles);
                // console.log("Image file path:", imageFiles[0]);

                // Sends list of file names
                res.send(files);
                    
            });
                
        }
});

// ONLY FOR TEST PURPOSES
// we could try to make this work for actual file
// that might work
exports.getservericon = asyncHandler(async (req, res, next) => {
    // would it be better to fetch them all at once?
    getOneServerIcon().catch((err) => console.log('Error in get Server Icon Save :' + JSON.stringify(err, undefined, 2)));
    async function getOneServerIcon() {

        // This... works????
        const imageFolderPath = "../Files/serverImages"; // res.params.filename;

        // Read all files in the folder, orders by name and sends them to frontend
        // TODO: problem right now: it sends the list of files, but it doesn't send the actual image
        fs.readdir(imageFolderPath, (err, files) => {
            if (err) {
                console.error("Error reading image folder:", err);
                res.status(404).send('Image not found');
                return;
            }

            // all we have to do is replace fileName with the name of the file we want
            
            console.log("filename: " + req.params.filename);

            const fileName = req.params.filename; //"testgym.png"; // Actual file name you want to send

            // Find the index of the file with the specific name
            let fileIndex = 0;// = files.findIndex(file => file === fileName);
            for (fileIndex; files.length; fileIndex++) {
                if (files[fileIndex] === fileName) {
                    break;
                }
            }

            console.log("files: " + files);

            // if (fileIndex === -1) {
            //     console.error("File not found:", fileName);
            //     res.status(404).send('Image not found');
            //     return;
            // }

            // Read the contents of the specific image file
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

exports.postservericon = asyncHandler(async (req, res, next) => {

    saveServerIcon().catch((err) => console.log('Error in post Server Icon Save :' + JSON.stringify(err, undefined, 2)));
        async function saveServerIcon() {

            // Saves file
            res.send(req.file);
    }
});
