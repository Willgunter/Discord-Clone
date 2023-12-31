const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    displayName: { type: String },
    username: { type: String },
    pwd: { type: String },
    date: { type: String }, // not completely sure what format this is in tbh
});

const UserModel = mongoose.model("UserModel", UserModelSchema, "users");

module.exports.getUserByUsername = function(username, callback) {
    UserModel.findOne({username: username}, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports = { UserModel };