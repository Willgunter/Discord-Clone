const mongoose = require("mongoose");
const config = require('../config/db');

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

const Schema = mongoose.Schema;

const ChannelModelSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    messages: [{ type: Schema.Types.ObjectId, ref: 'MessageModel', required: true }],
});


const ChannelModel = mongoose.model("ChannelModel", ChannelModelSchema, "channels");

module.exports.getServerByName = function (name) {} // eventually

module.exports.addChannel = asyncHandler(async (newChannel, callback) => {

    try {
        // Save the new server to the database
        await newChannel.save(callback);
        console.log(newChannel.name + " created");
        if (callback) {
            callback(null, newChannel);
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

    console.log(newChannel.name + " created");
    
});


module.exports = { ChannelModel };
