// place where we submit and store the messages
var { ServerModel } = require("../models/server");
var { ChannelModel } = require("../models/channel");
var { UserModel } = require("../models/user");
var { MessageModel } = require("../models/message");
var { mongoose } = require("mongoose");
// Note: NEEDS TO BE TITLED "MessageModel" exactly for it to work for some reason

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");
// const multer = require("multer");
const path = require("path");
const fs = require("fs");

// => localhost:3000/servers
exports.getserver = asyncHandler(async (req, res, next) => {
    
    getServer().catch((err) => console.log('Error in get Server Save :' + JSON.stringify(err, undefined, 2)));
        async function getServer() {
            const servers = await ServerModel.find({}, { name: 1, channels: 1, _id: 0 })
                .sort({ name: 1 })
                .populate({
                    path: "channels",
                });

            const serverNames = servers.map(server => server.name);            
            let messages = servers.map(server => server.channels);
            
            let rtnmessages = [];
            
            for (let i = 0; i < messages.length; i++) {
                rtnmessages[i] = [];
                rtnmessages[i][0] = serverNames[i];
                rtnmessages[i][1] = [];

                for (let j = 0; j < messages[i].length; j++) {
                    rtnmessages[i][1][j] = [];
                    rtnmessages[i][1][j][0] = messages[i][j].name;
                    rtnmessages[i][1][j][1] = [];

                    for (let k = 0; k < messages[i][j].messages.length; k++) {
                        
                        const messageIdString = messages[i][j].messages[k].toString();
                        rtnmessages[i][1][j][1][k] = [];

                        const test = await MessageModel.findOne({ _id:  messageIdString }, { text: 1, user: 1}).populate("user"); // works
                        rtnmessages[i][1][j][1][k][0] = test.user.name;
                        rtnmessages[i][1][j][1][k][1] = test.text;
                        
                        console.log("whole: " + rtnmessages);
                    }
                }
            }
            
            res.send({ serverNames, rtnmessages });
        }
});

exports.postserver = asyncHandler(async (req, res, next) => {
    
    saveServer().catch((err) => console.log('Error in post Server Save :' + JSON.stringify(err, undefined, 2)));
    async function saveServer() {

        const sev = new ServerModel({
            name: req.body.name,
            channels: req.body.channels,
            imagePath: req.body.imagePath,
        });

        await sev.save();
        
        res.send(sev);
        
    }
    
});

exports.addmessage = asyncHandler(async (req, res, next) => {
    
    addMessage().catch((err) => console.log('Error in Server controller add message :' + JSON.stringify(err, undefined, 2)));
    async function addMessage() {

        // res.body.list[0] = Message object
        // res.body.list[1] = server name
        // res.body.list[2] = channel name
        
        const serverName = req.body[1];
        const channelName = req.body[2];
        
        const server = await ServerModel.findOne({name: serverName}, {_id: 0, name: 1, channels: 1});

        for (const channelId of server.channels) {
            const channel = await ChannelModel.findById(channelId);
            if (channel.name === channelName) {
                
                const newMessage = new MessageModel({
                    _id: new mongoose.Types.ObjectId(),
                    text: req.body[0].text,
                    user: req.body[0].user,
                });

                await newMessage.save();

                channel.messages.push(newMessage);

                await channel.save();

                res.send({"Message added": newMessage});
                
                break;
            }
        }
    }
    
});

exports.getmessages = asyncHandler(async (req, res, next) => {
    
    getServer().catch((err) => console.log('Error in get Server Save :' + JSON.stringify(err, undefined, 2)));
        async function getServer() {
            const servers = await ServerModel.find({}, { name: 1, channels: 1, _id: 0 }).sort({ name: 1 });
            servers.popupate('channels');
            res.send(servers);
        }
});

// Used by frontend to get server image from server 
exports.getservericon = asyncHandler(async (req, res, next) => {
    
    getOneServerIcon().catch((err) => console.log('Error in get Server Icon Get :' + JSON.stringify(err, undefined, 2)));
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
                if (files[fileIndex] == fileName) {
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
            res.send(req.file);
    }
});
