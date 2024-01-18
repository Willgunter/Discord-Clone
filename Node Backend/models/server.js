const mongoose = require("mongoose");
const config = require('../config/db');

const Schema = mongoose.Schema;

const ServerModelSchema = new Schema({
    name: { type: String, required: true },
    // channels: { type: Array, required: true },
    // user: { type: Schema.Types.ObjectId, ref: "UserModel" }, // Reference to the User model
});

const ServerModel = mongoose.model("ServerModel", ServerModelSchema, "servers");

module.exports.getServerByName = function (name) {} // eventually

module.exports.addServer = async function (newServer, callback) {
    try {
        // Save the new server to the database
        await newServer.save();
        console.log(newServer.name + " created");
        if (callback) {
            callback(null, newServer);
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

    console.log(newServer.serverName + " created");
    
}


module.exports = { ServerModel };
