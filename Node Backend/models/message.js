const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageModelSchema = new Schema({
    text: {type: String },
    server: {type: String},
    channel: {type: String},
})

const MessageModel = mongoose.model("MessageModel", MessageModelSchema);

module.exports = { MessageModel, };