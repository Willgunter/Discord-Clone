const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const MessageModelSchema = new Schema({
    text: { type: String },
    user: { type: String }, // name of current user in local storage
});

const MessageModel = mongoose.model("MessageModel", MessageModelSchema, "messagemodels");

module.exports = { MessageModel };

