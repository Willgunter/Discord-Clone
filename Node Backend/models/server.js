const mongoose = require("mongoose");
const config = require('../config/db');

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

const Schema = mongoose.Schema;

const ServerModelSchema = new Schema({
    name: { type: String, required: true },
    channels: [{ type: Schema.Types.ObjectId, ref: 'ChannelModel', required: true }],
    imagePath: { type: String, required: true },
});

const ServerModel = mongoose.model("ServerModel", ServerModelSchema, "servers");

module.exports.getServerByName = function (name) {} // eventually

module.exports.addServer = asyncHandler(async (newServer, callback) => {
    
    try {
        // Save the new server to the database
        await newServer.save(callback);
        console.log(newServer.name + " created");
        if (callback) {
            callback(null, newServer);
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

    console.log(newServer.name + " created");
    
});


module.exports = { ServerModel };
