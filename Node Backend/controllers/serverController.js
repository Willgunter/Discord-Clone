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
    getServer().catch((err) => console.log('Error in get Server Save :' + JSON.stringify(err, undefined, 2)));
        async function getServer() {
            
            res.send(await ServerModel.find({}, { name:1, _id:0}).sort({name:1}));
            
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
                
                const imageFolderPath = "../Files/serverImages";

                // Read all files in the folder, orders by name and sends them to frontend
                fs.readdir(imageFolderPath, (err, files) => {

                    if (err) {
                        console.error("Error reading image folder:", err);
                        return;
                    }

                    // const imageFiles = files
                    //     .filter((file) => file.endsWith(".jpg") || file.endsWith(".png")) // Filter only image files
                    //     .sort((a, b) => a.localeCompare(b)); // Sort files by name

                    // console.log("Image files:", imageFiles);
                    // console.log("Image file path:", imageFiles[0]);
                    // res.send(imageFiles);
                    

                    // problem
                    const imagesPath = path.join(__dirname, imageFolderPath, req.params.filename);

                    // const imagePath = path.join(imagesPath, req.params.filename);

                    // Serve the image if it exists, otherwise handle the error
                    if (fs.existsSync(imagesPath)) {
                        res.sendFile(imagesPath);
                        
                    } else {
                        res.status(404).send('Image not found');
                    }
                });
                
            }
});

exports.postservericon = asyncHandler(async (req, res, next) => {

    saveServerIcon().catch((err) => console.log('Error in post Server Icon Save :' + JSON.stringify(err, undefined, 2)));
        async function saveServerIcon() {

            res.send(req.file);
    }
});
