const mongoose = require("mongoose");
const config = require('../config/db');

const asyncHandler = require("express-async-handler");
const { body, validationResult} = require("express-validator");

const Schema = mongoose.Schema;

const ServerModelSchema = new Schema({
    name: { type: String, required: true },
    channels: [{ type: Schema.Types.ObjectId, ref: 'ChannelModel', required: true }],
});

const ServerModel = mongoose.model("ServerModel", ServerModelSchema, "servers");

module.exports = { ServerModel };
