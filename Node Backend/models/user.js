const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require('../config/db');
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true},
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const UserModel = module.exports = mongoose.model("UserModel", UserModelSchema, "users");

// NOTE: COMMENTED OUT FUNCTION BELOW IS THE CALLBACK VARIANT.
// CALLBACKS ARE NOT SUPPORTED BY UserModel so I hope this works
module.exports.getUserByUsername = function(username) {
    const query = {username: username}
    return UserModel.findOne(query); // was callback
}

// module.exports.getUserByUsername = function(username, callback) {
//     const query = {username: username}
//     UserModel.findOne(query, callback); // was callback
// }

module.exports.getUserById = function(id, callback) {
    UserModel.findById(id, callback);
}

module.exports.addUser = async function(newUser){

    // generated using copilot
    try {

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newUser.password, salt);
        newUser.password = hash;

        // break here so we can double check values are not empty
        newUser.save(); // Fix: Remove the argument from the save() method. ???
        // Note: Postman is sending it and its working but postman is indefinetely loading
        // and then says it "doesn't work"

    } catch (error) {
        throw error;
    }

    console.log(newUser.username + " added to database");
    
}

module.exports.comparePassword = function(candidatePassword, hash) {
    console.log(candidatePassword, hash);
    try {
        const isMatch = bcrypt.compare(candidatePassword, hash);
        return isMatch;
    } catch (error) {
        throw error;
    }
}
// vvv callback variant vvv
// bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//     if(err) throw err;
//     callback(null, isMatch); // probly problem here
// });


module.exports = { UserModel };