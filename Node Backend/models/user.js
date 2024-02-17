const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require('../config/db');

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    email: { type: String, required: true},
    username: { type: String, required: true },
    password: { type: String, required: true },
    color: { type: String, required: true },
    owns: [{ type: String, required: true }],
});

const UserModel = module.exports = mongoose.model("UserModel", UserModelSchema, "users");

module.exports.getUserByUsername = function(username) {
    const query = {username: username}
    return UserModel.findOne(query);
}

module.exports.getUserById = function(id, callback) {
    return UserModel.findById(id, callback);
}

module.exports.addUser = async function(newUser, callback) {

    try {
        
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newUser.password, salt);
        newUser.password = hash;
        
        // break here so we can double check values are not empty
        await newUser.save(callback);

    } catch (error) {
        throw error;
    }

    console.log(newUser.username + " added to database");
    
}

module.exports.comparePassword = function(candidatePassword, hash) {

    try {
        const isMatch = bcrypt.compare(candidatePassword, hash);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

module.exports = { UserModel };