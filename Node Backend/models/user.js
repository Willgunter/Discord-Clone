const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    displayName: { type: String },
    username: { type: String },
    pwd: { type: String },
    date: { type: String }, // not completely sure what format this is in tbh
});

const UserModel = mongoose.model("UserModel", UserModelSchema, "users");

module.exports = { UserModel };