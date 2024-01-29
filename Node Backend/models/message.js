const mongoose = require("mongoose");
const { User } = require("./user");

const Schema = mongoose.Schema;

const MessageModelSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    text: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // name of current user in local storage
});

const MessageModel = mongoose.model("MessageModel", MessageModelSchema, "messagemodels");

module.exports = { MessageModel };

