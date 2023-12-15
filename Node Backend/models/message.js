const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageModelSchema = new Schema({
    text: { type: String },
    server: { type: String },
    channel: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "UserModel" }, // Reference to the User model
});

const MessageModel = mongoose.model("MessageModel", MessageModelSchema, "messagemodels");

module.exports = { MessageModel };
